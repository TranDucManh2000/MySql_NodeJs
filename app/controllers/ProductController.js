const connect = require("../../connect");

class ProductController {
  // [get] /product
  index(req, res, next) {
    connect.query("SELECT * FROM Products", function (err, result) {
      err
        ? res.json({ status: 403 })
        : res.json({ result: result, status: 200 });
    });
  }
  // [get] /product/:slug
  slug(req, res, next) {
    connect.query(
      `SELECT Id,Name,Price,CategoryId FROM Products WHERE Id = ${req.params.slug}`,
      function (err, result) {
        err
          ? res.json({ status: 403 })
          : res.json({ result: result, status: 200 });
      }
    );
  }
  // [put] /product/:slug
  put(req, res, next) {
    connect.query(
      `UPDATE Products SET Name="${req.body.name}",Price=${req.body.price},CategoryId=${req.body.categoryId} WHERE Id = ${req.params.slug}`,
      function (err, result) {
        err ? res.json({ status: 403 }) : res.json({ status: 200 });
      }
    );
  }
  // [post] /product
  post(req, res, next) {
    connect.query(
      `INSERT INTO Products(Name,Price,CategoryId) VALUES("${req.body.name}",${req.body.price},${req.body.categoryId})`,
      function (err, result) {
        err ? res.json({ status: 403 }) : res.json({ status: 200 });
      }
    );
  }
  // [delete] /product/:slug
  delete(req, res, next) {
    connect.query(
      `DELETE FROM Products WHERE Id = ${req.params.slug}`,
      function (err, result) {
        err ? res.json({ status: 403 }) : res.json({ status: 200 });
      }
    );
  }
}

module.exports = new ProductController();
