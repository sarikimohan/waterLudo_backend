import mongoose from "mongoose";

export default interface Users{
  _id:mongoose.Schema.Types.ObjectId,
  userId:string|null,
  userName:string,
  isSocial:boolean,
  avatar:string,
  loginType:"GUEST"|"FACEBOOK"|"GMAIL"|"APPLE",
  totalEarning:number,
  coin:number,
  totalWin:number,
}