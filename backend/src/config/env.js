const dotenv = require("dotenv");

dotenv.config({
  path: "./.env"
})

const config = {
  PORT : process.env.PORT,
  CORS_ORIGIN : process.env.CORS_ORIGIN, 
  MONGODB_URI : process.env.MONGODB_URI,
  NODE_ENV : process.env.NODE_ENV,
  ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY : process.env.ACCESS_TOKEN_EXPIRY
}

module.exports = config;