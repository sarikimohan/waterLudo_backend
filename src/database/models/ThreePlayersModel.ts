import { model } from "mongoose";
import ThreePlayersSchema from "../schemas/ThreePlayersSchema.js";

const ThreePlayersModel = model('ThreePlayers',ThreePlayersSchema)

export default ThreePlayersModel