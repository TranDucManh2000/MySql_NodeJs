const express = require("express");
const router = express.Router();
const { checkTokenAdmin } = require("../util/checkToken");

const productController = require("../controllers/ProductController");

router.put("/:slug", checkTokenAdmin, productController.put);
router.get("/:slug", productController.slug);
router.delete("/:slug", checkTokenAdmin, productController.delete);
router.get("/", productController.index);
router.post("/", checkTokenAdmin, productController.post);

module.exports = router;
