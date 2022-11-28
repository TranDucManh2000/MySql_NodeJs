const express = require("express");
const router = express.Router();
const { checkTokenAdmin } = require("../util/checkToken");

const commentController = require("../controllers/CommentController");

router.get("/:slug", commentController.slug);

module.exports = router;
