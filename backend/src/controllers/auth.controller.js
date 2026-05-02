const userModel = require("../models/user.model");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  if ([name, email, password].some(field => !field || field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await userModel.findOne({
    $or: [{ name }, { email }]
  })

  if (existingUser) throw new ApiError(409, "User with same email or username already exists");

  const user = await userModel.create({
    name,
    email,
    password,
    role: "user"
  })

  const token = user.generateAccessToken();

  res.cookie("token", token, {
    httpOnly: true,     // prevents JS access (XSS protection)
    secure: false,       // only HTTPS (set false in localhost)
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  console.log(token)

  const createdUser = await userModel.findById(user._id).select(
    "-password"
  )

  if(!createdUser){
    throw new ApiError(500, "Something went wrong while registering a user");
  }

  return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
  )
})


module.exports = { registerController };