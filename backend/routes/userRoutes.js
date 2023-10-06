import express from 'express'
import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';

export const userRouter = new Router()

userRouter
  .post("/", registerUser)
  .post("/login", loginUser);
