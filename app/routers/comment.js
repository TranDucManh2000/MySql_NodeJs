const express = require("express");
const router = express.Router();
const { checkTokenValidate } = require("../util/checkToken");

const commentController = require("../controllers/CommentController");

router.get("/:slug", commentController.slug);
router.post("/:slug", checkTokenValidate, commentController.post);

module.exports = router;
