import mongoose from "mongoose";

export interface ThreePlayers{
  _id:mongoose.Schema.Types.ObjectId,
  userId:string,
  wins: number,
  totalGames:number
}