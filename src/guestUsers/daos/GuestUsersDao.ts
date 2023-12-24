import express from "express";
import {
  GuestUserLoginData,
  tranferUserRequestBody,
} from "../dto/GuestUsersDto.js";
import GuestCountModel from "../../database/models/GuestCountModel.js";
import debug from "debug";
import UsersModel from "../../database/models/UsersModel.js";
import TwoPlayersModel from "../../database/models/TwoPlayersModel.js";
import FourPlayersModel from "../../database/models/FourPlayersModel.js";
import ThreePlayersModel from "../../database/models/ThreePlayersModel.js";


const debugLog: debug.IDebugger = debug("GuestUsersDao: ");
class GuestUsersDao {
  async getGuestUser(req: express.Request, res: express.Response,next: express.NextFunction) {

    // throw new Error('checked the erroe hanlding')
    // try{
    //   if("hello"=="hello")
    //   throw new Error('checked the erroe hanlding')
    // }catch(err){
    //   next(err)
    // }
   
    let guestCount = await GuestCountModel.find();

    if (!guestCount) {
      res.status(500).send("guest count not found");
    } else {
      let guest = guestCount[0];
      if (!guest) {
        await GuestCountModel.create({
          guestCount: 0,
        });
        guestCount = await GuestCountModel.find();
        guest = guestCount[0];
      }

      const finalCount = guest.guestCount + 1;
      const guestName = "guest_" + finalCount.toString();
      debugLog("finalCount: ", finalCount);
      debugLog("guestName: ", guestName);
      let guestLoginData = await UsersModel.create({
        userName: guestName,
      });

      guestLoginData.userId = guestLoginData._id + "";
      guestLoginData.save();

      guestCount[0].guestCount = finalCount;
      guestCount[0].save();
      const res: GuestUserLoginData = {
        userId: guestLoginData._id + "",
        userName: guestLoginData.userName,
        isSocial: guestLoginData.isSocial,
        avatar: guestLoginData.avatar,
        loginType: guestLoginData.loginType,
        coin: guestLoginData.coin,
      };

      await TwoPlayersModel.create({
        userId: res.userId,
      });

      await ThreePlayersModel.create({
        userId: res.userId,
      });

      await FourPlayersModel.create({
        userId: res.userId,
      });

      return res;
    }
  }

  async transferUser(req: express.Request, res: express.Response) {
    const reqBody: tranferUserRequestBody = req.body;

    const guest = await UsersModel.findOne({ _id: reqBody.guestId });

    if (!guest) {
      res.status(500).send("invalid guest Id");
    }

    try {
      const twoplayer = await TwoPlayersModel.findOne({ userId: guest.userId });
      twoplayer.userId = reqBody.userId;
      await twoplayer.save();
    } catch (err) {
      throw new Error(err)
    }

    try{
      const threePlayer = await ThreePlayersModel.findOne({userId: guest.userId})
      threePlayer.userId = reqBody.userId
      await threePlayer.save()
    }catch(err){
      throw new Error(err)
    }

    try{
      const fourPlayer = await FourPlayersModel.findOne({userId:guest.userId})
      fourPlayer.userId= reqBody.userId
      await fourPlayer.save()
    }catch(err){
      throw new Error(err)
    }

    guest.userId = reqBody.userId;
    guest.avatar = reqBody.avatar;
    guest.userName = reqBody.userName;
    guest.isSocial = reqBody.isSocial;
    guest.loginType = reqBody.loginType;

    const user = await guest.save();

    return user;
  }
}

export default new GuestUsersDao();
