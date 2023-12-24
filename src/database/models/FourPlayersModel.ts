import { model } from "mongoose";
import FourPlayersSchema from "../schemas/FourPlayersSchema.js";


const FourPlayersModel = model('FourPlayers',FourPlayersSchema)

export default FourPlayersModel