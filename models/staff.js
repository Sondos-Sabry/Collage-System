import { Schema, model } from "mongoose";

const userSchema = new Schema({
fName: {
    type: String,
    required: true,
},
lName: {
    type: String,
        required: true,
},
password: {
    type: String,
    required: true,
},
user_type: {
    type: String,
    required: true
},
    timestaps: true });

export default model('user', userSchema);