import { Schema } from "mongoose";
import Users from "../entities/Users.js";
import { exitOnError } from "winston";

const UsersSchema = new Schema<Users>({
  userId:{
    type:String,
    trim:true,
    unique:true,
    default:null
  },
  userName:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  isSocial:{
    type:Boolean,
    required:true,
    default:false,
    trim:true
  },
  avatar:{
    type:String,
    default:"1",
    required:true,
    trim:true
  },
  loginType:{
    type:String,
    enum:[
      "GUEST",
      "FACEBOOK",
      "GMAIL",
      "APPLE"
    ],
    default:"GUEST",
    trim:true
  },
  totalEarning:{
    type:Number,
    default:0,
    required:true,
    trim:true
  },
  coin:{
    type:Number,
    default:100,
    trim:true,
    required:true
  },
  totalWin:{
    type:Number,
    default:0,
    trim:true,
    required:true
  }
})

export default UsersSchema