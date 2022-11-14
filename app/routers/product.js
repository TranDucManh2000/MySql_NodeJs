const express = require("express");
const router = express.Router();
const { checkTokenValidate } = require("../util/checkToken");

const productController = require("../controllers/ProductController");

router.get("/", checkTokenValidate, productController.index);

module.exports = router;
