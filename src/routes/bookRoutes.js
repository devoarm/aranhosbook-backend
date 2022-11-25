var express = require("express");
var router = express.Router();
const bookController = require("../controllers/bookController");
const auth = require("../middleware/auth");
router.get("/", bookController.BookDirector);
router.get("/book-index-send-leader/:id", bookController.BookIndexSendLeader);

module.exports = router;
