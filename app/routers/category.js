const express = require("express");
const router = express.Router();
const { checkTokenAdmin } = require("../util/checkToken");

const catergoryController = require("../controllers/CategoryController");

router.delete("/:slug", checkTokenAdmin, catergoryController.delete);
router.put("/:slug", checkTokenAdmin, catergoryController.put);
router.get("/:slug", catergoryController.slug);
router.post("/", checkTokenAdmin, catergoryController.post);
router.get("/", catergoryController.index);

module.exports = router;
