const express = require("express");
const router = express.Router();

const catergoryController = require("../controllers/CategoryController");

router.get("/", catergoryController.index);

module.exports = router;
