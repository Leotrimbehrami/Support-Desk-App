import asyncHandler from "express-async-handler";


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
  res.send("Register Route");
});

// @desc    Login a user
// @ route  /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});
