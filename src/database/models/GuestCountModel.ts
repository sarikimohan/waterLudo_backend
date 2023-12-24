import { model } from "mongoose";
import GuestCountSchema from "../schemas/GuestCountSchema.js";

const GuestCountModel = model("GuestCount",GuestCountSchema)

export default GuestCountModel
