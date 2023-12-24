export interface UserLoginRequestDto {
  userId: string;
  userName: string;
  isSocial: boolean;
  avatar: string;
  loginType: "GUEST" | "FACEBOOK" | "GMAIL" | "APPLE";
}

export interface UserLoginResponse {
  userId: string;
  userName: string;
  isSocial: boolean;
  avatar: string;
  loginType: "GUEST" | "FACEBOOK" | "GMAIL" | "APPLE";
  coin: number;
}

export interface ManageCoins {
  userId: string;
  addCoin: number;
  deductCoin: number;
}

export interface UserProfile {
  totalEarning:number,
  currentCoin:number,
  totalGamePlayed:number,
  winRatio:number,
  twoPlayerWin:number,
  threePlayerWin:number,
  fourPlayerWin:number
}

export interface UserWinRequest{
  userId:string,
  gameStatus:"WIN"|"LOSS",
  playerType:"TWO_PLAYER"|"THREE_PLAYER"|"FOUR_PLAYER"
}