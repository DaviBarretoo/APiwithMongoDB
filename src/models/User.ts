import mongoose, { Schema, model} from "mongoose";
import {UserLogin} from "../interfaces/interfaceforuser"


const UserForSistem : Schema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password:{type: String, require: true},
})

// export the model

const User = mongoose.model<UserLogin>("user", UserForSistem)

export default User;