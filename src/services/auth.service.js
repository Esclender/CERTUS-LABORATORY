import loginSchema from "../models/loginSchema.js"
import db from "../database/project.module.js"
import BaseRequestException from "../exceptions/baseRequestException.module.js"
import genrateJwt from"../utils/generateJwt.js"

const model = new db(loginSchema)

async function loginUser(email,passw){
  const user = await loginSchema.findOne({email:email})
  console.log(user);

  if(!user){
    throw new BaseRequestException("email is obligatory")
  }

  const validatePassw = user.password === passw

  if(!validatePassw){
    throw new BaseRequestException("The passwords don't match")
  }

  return genrateJwt({id: user._id, email: user.email})
}

export default {
  loginUser
}
