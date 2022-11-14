const connect = require("../../connect");

class ProductController {
  // [get] /product
  index(req, res, next) {
    connect.query("SELECT * FROM `Products`", function (err, result) {
      err ? res.json({ status: 403 }) : res.json(result);
    });
  }
}

module.exports = new ProductController();
