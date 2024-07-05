import express from 'express'
import { loginUer,registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUer)

export default userRouter;