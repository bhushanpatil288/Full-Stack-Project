const jwt = require("jsonwebtoken");
const env_config = require("../config/env");
const { ApiError } = require("../utils/ApiError");

const auth = (req, res, next) => {
  if(!req.cookies.token){
    return res.status(401).json(
      ApiError(401, "Invalid token")
    )
  }
  try {
    const decoded = jwt.verify(req.cookies.token, env_config.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next()
  } catch (error) {
    return res.status(401).json(
      ApiError(401, "Invalid token", error)
    )
  }
}

module.exports = auth;