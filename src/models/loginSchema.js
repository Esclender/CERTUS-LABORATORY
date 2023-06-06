import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  email: {
    type:String,
    required: [true, "The user must have an email"],
    unique: true
  },
  password:{
    type:Number,
    required: [true, "The user must have a password"]
  }
})


const user = mongoose.model("users", loginSchema)

export default user