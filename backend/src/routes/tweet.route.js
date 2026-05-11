const { Router } = require("express");
const { newTweet } = require("../controllers/tweet.controller.js");
const auth = require("../middlewares/auth.middleware.js");
const { displayTweets } = require("../controllers/tweet.controller.js");
const router = Router()

// api/tweet/

// create tweet
router.route("/new").post(auth, newTweet);


// display tweets
router.route("/display-all").post(displayTweets);

// edit tweet

// delete tweet


module.exports = router;