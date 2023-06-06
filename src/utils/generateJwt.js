import jwt from "jsonwebtoken"
import loginSchema from "../models/loginSchema.js"

const generateJwt = (payload) => {
  return new Promise((resolve,reject) => {
    jwt.sign(payload, process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }, (err, token) => {
        if(err){
          console.log(err);
          reject("No se pudo crear el token");
        }else{
          resolve(token)
        }
    
      }
    )
  })
}

export default generateJwt