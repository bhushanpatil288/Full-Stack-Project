const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env_config = require("../config/env");

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user"
  }
});

userModel.pre("save", async function(next){
  if(!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
})

userModel.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password);
}

userModel.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id
    },
    env_config.ACCESS_TOKEN_SECRET,
    { expiresIn: env_config.ACCESS_TOKEN_EXPIRY }
  )
}

module.exports = mongoose.model("User", userModel);