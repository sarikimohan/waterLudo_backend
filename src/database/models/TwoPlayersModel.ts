import { model } from "mongoose";
import TwoPlayersSchema from "../schemas/TwoPlayersSchema.js";


const TwoPlayersModel = model("TwoPlayers",TwoPlayersSchema)

export default TwoPlayersModel