import express from 'express'
import { Router } from 'express'
import { getMe, loginUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

export const userRouter = new Router()

userRouter
  .post("/", registerUser)
  .post("/login", loginUser)
  .get('/me',protect, getMe)
