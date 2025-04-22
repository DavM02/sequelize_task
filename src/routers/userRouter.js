import express from 'express';
import UserController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAllUsers);
export default userRouter;
