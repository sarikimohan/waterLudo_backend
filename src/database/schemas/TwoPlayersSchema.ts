import { Schema } from "mongoose";
import { Twoplayers } from "../entities/TwoPlayers.js";

const TwoPlayersSchema = new Schema<Twoplayers>({
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

export default TwoPlayersSchema
