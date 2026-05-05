const { Router } = require("express");
const { registerController, loginController, getCurrentUser } = require("../controllers/auth.controller");
const router = Router();

// api/auth

router.route("/get-current-user").post(getCurrentUser);
router.route("/register").post(registerController);
router.route("/login").post(loginController);

module.exports = router;