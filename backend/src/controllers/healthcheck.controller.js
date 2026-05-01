const { ApiResponse } = require("../utils/ApiResponse");

const healthcheck = async (req, res) =>{
  return res.status(200).json(
    new ApiResponse(200, "OK", "Health check passed")
  )
}

module.exports = { healthcheck };