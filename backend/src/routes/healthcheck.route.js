const express = require("express");
const { healthcheck } = require("../controllers/healthcheck.controller");

const router = express.Router();

router.route("/").get(healthcheck);

module.exports = router;