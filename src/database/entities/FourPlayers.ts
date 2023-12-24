import mongoose from "mongoose";

export interface FourPlayers{
  _id:mongoose.Schema.Types.ObjectId,
  userId:string,
  wins: number,
  totalGames:number
}