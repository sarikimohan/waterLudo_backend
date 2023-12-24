import { model } from "mongoose";
import UsersSchema from "../schemas/UsersSchema.js";

const UsersModel = model('Users',UsersSchema)

export default UsersModel