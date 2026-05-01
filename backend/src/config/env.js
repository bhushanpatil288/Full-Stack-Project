const dotenv = require("dotenv");

dotenv.config({
  path: "./.env"
})

const config = {
  PORT: process.env.PORT,
  CORS_ORIGIN: process.env.CORS_ORIGIN, 
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV : process.env.NODE_ENV
}

module.exports = config;