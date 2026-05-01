const app = require("./src/app");
const env_config = require("./src/config/env");
const connectDB = require("./src/db/connectDB");


connectDB().then(() => {
  app.listen(env_config.PORT, () => {
    console.log(`listening on http://localhost:${env_config.PORT}`)
  })
}).catch((error) => {
  console.log("MoongoDB connection error", error);
})