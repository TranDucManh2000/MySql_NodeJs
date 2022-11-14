const connect = require("../../connect");

class CategoryController {
  // [get] /category
  index(req, res, next) {
    connect.query("SELECT * FROM CategoryItem", function (err, result) {
      err ? res.json({ status: 403 }) : res.json(result);
    });
  }
}

module.exports = new CategoryController();
