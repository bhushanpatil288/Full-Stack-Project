const mongoose = require("mongoose");
const { ApiError } = require("../utils/ApiError");
const env_config = require("../config/env");

const errorHandler = (err, req, res, next) => {
  console.log(env_config.NODE_ENV)
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || (error instanceof mongoose.Error ? 400 : 500);

    const message = err.message || "Something went wrong";
    error = new ApiError(statusCode, message, error?.errors || [], err.stack)
  }

  const response = {
    ...error,
    message: error.message,
    ...(env_config.NODE_ENV === "development" ? { stack: error.stack } : {})
  }

  return res.status(error.statusCode).json(response);
}

module.exports = { errorHandler };