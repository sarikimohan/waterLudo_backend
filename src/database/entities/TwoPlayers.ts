import mongoose from "mongoose";

export interface Twoplayers  {
  _id:mongoose.Schema.Types.ObjectId,
  userId:string,
  wins: number,
  totalGames:number
}