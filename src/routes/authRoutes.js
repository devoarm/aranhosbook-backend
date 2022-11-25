var express = require("express");
var router = express.Router();
const authenController = require("../controllers/authenController");
const auth = require("../middleware/auth");
router.get("/check", auth, authenController.CheckToken);
router.post("/login", authenController.login);

module.exports = router;
