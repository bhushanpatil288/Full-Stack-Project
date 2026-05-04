const { Router } = require("express");
const { registerController, loginController } = require("../controllers/auth.controller");
const router = Router();

// api/auth

router.route("/register").post(registerController);
router.route("/login").post(loginController);

module.exports = router;