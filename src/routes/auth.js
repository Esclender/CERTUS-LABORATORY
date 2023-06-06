import express from "express"
import loginController from "../controllers/auth.controller.js";

const Router = express.Router()

Router.post("/", loginController.loginUser)

export default Router