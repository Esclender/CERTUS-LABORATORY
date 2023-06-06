import loginServices from "../services/auth.service.js"


async function loginUser(req,res){
  try {
    const {email,password} = req.body
    const token = await loginServices.loginUser(email, password)
    return res.json({token:token})

  } catch (error) {
    console.log(error)
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

export default {
  loginUser
}