import jwt from "jsonwebtoken"
import loginSchema from "../models/loginSchema.js"

async function verifyJwt(req,res,next) {
  const token = req.header("Authorization")

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }

  try {
    const {id} = jwt.verify(token, process.env.TOKEN_KEY);

    const user = loginSchema.findById(id)

    if(!user){
      res.status(401).json({
        message:"The token user is not valid"
      })
    }

    req.authenticatedUser = user

    next()


  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
}

export default verifyJwt
