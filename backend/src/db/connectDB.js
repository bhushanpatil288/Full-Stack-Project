const mongoose = require("mongoose");
const env_config = require("../config/env");



const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(env_config.MONGODB_URI);
    console.log(`\n MongoDB connected | DB_HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Failed to connect ", error);
    process.exit(1);
  }
}

module.exports = connectDB;