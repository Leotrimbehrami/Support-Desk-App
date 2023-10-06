import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt'
import { userModel } from "../models/userModel.js";


// @desc    Register a new user
// @ route  /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all field");
  }

  // Find if user already exist
  const userExists = await userModel.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = await userModel.create({
    name,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
});

// @desc    Login a user
// @ route  /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});
