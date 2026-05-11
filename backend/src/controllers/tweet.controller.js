const asyncHandler = require("../utils/asyncHandler");
const logger = require("../config/logger");
const tweetModel = require("../models/tweet.model");
const userModel = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const newTweet = asyncHandler(async (req, res) => {
  logger.info("new tweet request received");

  const { title, description } = req.body;

  console.log(description)

  if (!title?.trim() || !description?.trim()) {
    throw new ApiError(400, "All fields are required");
  }

  const userData = await userModel
    .findById(req.user)
    .select("-password");


  if (!userData) {
    throw new ApiError(404, "User not found");
  }

  const tweet = await tweetModel.create({
    title,
    description,
    author: userData._id
  });

  console.log(tweet)

  res.status(201).json(
    new ApiResponse(
      201,
      {
        ...tweet.toObject(),
        author: userData
      },
      "Tweet created successfully"
    )
  );
});

const displayTweets = asyncHandler(async (req, res) => {
  logger.info("Display tweets request recieved");
  const tweets = await tweetModel.
  find()
  .populate({
    path: "author",
    select: "-password -email"
  })
  .sort({ _id: -1 })
  .limit(req.body.limit);
  console.log(req.body.limit)
  
  if(!tweets){
    throw new ApiError(404, "No tweets");
  };

  res.status(200).json(
    new ApiResponse(200, tweets, "Tweets fetched successfully")
  );
});

module.exports = { newTweet, displayTweets };