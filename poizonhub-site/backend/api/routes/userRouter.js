import {Router} from "express";
import {userController} from "../controllers/userController.js";

export const userRouter = new Router()

userRouter.post('/user', userController.createUser)
userRouter.get('/users', userController.getUsers)
userRouter.get('/user/:id', userController.getUser)
userRouter.put('/user', userController.updateUser)
userRouter.delete('/user/:id', userController.deleteUser)