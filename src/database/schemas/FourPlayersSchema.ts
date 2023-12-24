import { Schema } from "mongoose";
import { FourPlayers } from "../entities/FourPlayers.js";


const FourPlayersSchema = new Schema<FourPlayers>({
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

export default FourPlayersSchema
