import { Schema } from "mongoose";
import { ThreePlayers } from "../entities/ThreePlayers.js";

const ThreePlayersSchema = new Schema<ThreePlayers>({
  userId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
    trim: true,
  },
  totalGames:{
    type:Number,
    required:true ,
    default:0,
    trim:true
  }
});

export default ThreePlayersSchema
