const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config()

const app = express();

// common middlewares

app.use(cors(
  {
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }
))

app.use(
  express.json({ limit: "16kb" })
)

app.use(
  express.urlencoded({ extended: true, limit: "16kb" })
)

app.use(cookieParser());


// routes

const healthcheckRouter = require("./routes/healthcheck.route");
const authRouter = require("./routes/auth.route.js");

app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/auth/", authRouter)



const { errorHandler } = require("./middlewares/error.middleware");
app.use(errorHandler);




module.exports = app;