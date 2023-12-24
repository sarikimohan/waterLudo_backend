import { Schema } from "mongoose";
import GuestCount from "../entities/GuestCount.js";


const GuestCountSchema = new Schema<GuestCount>({
  guestCount:{
    type:Number,
    required:true,
    default: 0,
    trim:true
  }
})

export default GuestCountSchema

