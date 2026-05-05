const userModel = require("../models/user.model");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const env_config = require("../config/env");
const jwt = require("jsonwebtoken");

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
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

const loginController = asyncHandler(async (req, res)=>{
  console.log(req.cookies)
  const { email, password } = req.body;
  if([email, password].some(field => field?.trim() === "")){
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await userModel.findOne({email})

  if(!existingUser){
    throw new ApiError(401, "User doesnt exist");
  }

  const isPasswordValid = await existingUser.isPasswordCorrect(password);

  if(!isPasswordValid){
    throw new ApiError(401, "Invalid Credentials");
  }

  const token = existingUser.generateAccessToken();

  const loggedInUser = await userModel.findById(existingUser._id)
    .select("-password");

  res.cookie("token", token, {
    httpOnly: true,     // prevents JS access (XSS protection)
    secure: false,       // only HTTPS (set false in localhost)
    sameSite: "strict", // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  })

  return res.status(200).json(
    new ApiResponse(200, loggedInUser, "logged in successfully")
  )
})

const getCurrentUser = asyncHandler(async (req, res)=>{
  // console.log(req.cookies, env_config.ACCESS_TOKEN_SECRET)
  const user = await jwt.verify(req.cookies.token, env_config.ACCESS_TOKEN_SECRET);
  const userData = await userModel.findOne({_id: user._id}).select("-password");
  if(userData){
    return res.status(200).json(
      new ApiResponse(200, userData, "User data fetched successfully")
    )
  } else {
    throw new ApiError(404, "user not found");
  }
})


module.exports = { registerController, loginController, getCurrentUser };