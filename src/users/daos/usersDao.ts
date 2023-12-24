import debug from "debug";
import mongoose from "mongoose";
import {
  ManageCoins,
  UserLoginRequestDto,
  UserLoginResponse,
  UserProfile,
  UserWinRequest,
} from "../dto/UserDto.js";
import Users from "../../database/entities/Users.js";
import UsersModel from "../../database/models/UsersModel.js";
import { error } from "winston";
import TwoPlayersModel from "../../database/models/TwoPlayersModel.js";
import ThreePlayersSchema from "src/database/schemas/ThreePlayersSchema.js";
import ThreePlayersModel from "../../database/models/ThreePlayersModel.js";
import FourPlayersModel from "../../database/models/FourPlayersModel.js";
import { PlayerType } from "../../global/globalVar.js";

const debugLog: debug.IDebugger = debug("UsersDao: ");

class UsersDao {
  constructor() {
    debugLog("Created new instance of UsersDao");
  }

  async userLogin(userData: UserLoginRequestDto) {
    if (!userData.userId || userData.userId == "") {
      throw new Error("invalid login userId");
    }

    if (!userData.userName || userData.userName == "") {
      throw new Error("invaild login userName");
    }

    const user = {
      userId: userData.userId,
      userName: userData.userName,
      avatar: userData.avatar,
      isSocial: userData.isSocial,
      loginType: userData.loginType,
    };

    debugLog(userData.isSocial);

    const createdUser = await UsersModel.create(user);

    await TwoPlayersModel.create({
      userId: createdUser.userId,
    });

    await ThreePlayersModel.create({
      userId: createdUser.userId,
    });

    await FourPlayersModel.create({
      userId: createdUser.userId,
    });

    const res: UserLoginResponse = {
      userId: createdUser.userId,
      userName: createdUser.userName,
      isSocial: createdUser.isSocial,
      avatar: createdUser.avatar,
      loginType: createdUser.loginType,
      coin: createdUser.coin,
    };

    return res;
  }

  async manageCoins(resource: ManageCoins) {
    const user = await UsersModel.findOne({ userId: resource.userId });

    if (!user) throw new Error("invalid user Id");
    user.totalEarning += resource.addCoin;
    user.coin = user.coin + resource.addCoin - resource.deductCoin;
    await user.save();
    return user.coin;
  }

  async getUserProfile(resource: { userId: string }) {
    const user = await UsersModel.findOne({ userId: resource.userId });
    if (!user) throw new Error("invalid userId");
    const twoPlayer = await TwoPlayersModel.findOne({
      userId: resource.userId,
    });
    const threePlayer = await ThreePlayersModel.findOne({
      userId: resource.userId,
    });
    const fourPlayer = await FourPlayersModel.findOne({
      userId: resource.userId,
    });
    if (!twoPlayer || !threePlayer || !fourPlayer) {
      throw new Error("player data not found");
    }

    const totalGamePlayed =
      twoPlayer.totalGames + threePlayer.totalGames + fourPlayer.totalGames;
    const totalWin = user.totalWin
    const winRatio = Math.round(totalWin / totalGamePlayed);
    const res: UserProfile = {
      totalEarning: user.totalEarning,
      currentCoin: user.coin,
      totalGamePlayed,
      winRatio: Number.isNaN(winRatio) ? 0 : winRatio,
      twoPlayerWin: twoPlayer.wins,
      threePlayerWin: threePlayer.wins,
      fourPlayerWin: fourPlayer.wins,
    };

    console.log(res.winRatio);

    return res;
  }

  async userWin(resource: UserWinRequest) {
    const user = await UsersModel.findOne({ userId: resource.userId });
    if (!user) throw new Error("Invalid User Id");

    if (resource.gameStatus == "WIN") {
      user.totalWin += 1;
      user.save();
    }

    if (resource.playerType == PlayerType.Two) {
      const twoPlayer = await TwoPlayersModel.findOne({
        userId: resource.userId,
      });
      if (!twoPlayer) throw new Error("invalid userId");

      if (resource.gameStatus == "WIN") {
        twoPlayer.wins += 1;
        twoPlayer.totalGames += 1;
      } else {
        twoPlayer.totalGames += 1;
      }

      await twoPlayer.save();
      return;
    } else if (resource.playerType == PlayerType.Three) {
      const threePlayer = await ThreePlayersModel.findOne({
        userId: resource.userId,
      });
      if (!threePlayer) throw new Error("invalid userId");

      if (resource.gameStatus == "WIN") {
        threePlayer.wins += 1;
        threePlayer.totalGames += 1;
      } else {
        threePlayer.totalGames += 1;
      }

      await threePlayer.save();
      return;
    } else if (resource.playerType == PlayerType.Four) {
      const fourPlayer = await FourPlayersModel.findOne({
        userId: resource.userId,
      });
      if (!fourPlayer) throw new Error("invalid userId");

      if (resource.gameStatus == "WIN") {
        fourPlayer.wins += 1;
        fourPlayer.totalGames += 1;
      } else {
        fourPlayer.totalGames += 1;
      }

      await fourPlayer.save();
      return;
    }
  }



  async 
}

export default new UsersDao();
