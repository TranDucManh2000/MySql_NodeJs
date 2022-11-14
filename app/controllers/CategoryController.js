const connect = require("../../connect");

class CategoryController {
  // [get] /category
  index(req, res, next) {
    connect.query("SELECT * FROM CategoryItem", function (err, result) {
      err
        ? res.json({ status: 403 })
        : res.json({ result: result, status: 200 });
    });
  }
  // [get] /category/:slug
  slug(req, res, next) {
    connect.query(
      `SELECT CategoryId,CategoryName FROM CategoryItem WHERE CategoryId =${req.params.slug}`,
      function (err, result) {
        err
          ? res.json({ status: 403 })
          : res.json(result.length > 0 ? result : { status: 403 });
      }
    );
  }
  // [put] /category/:slug
  put(req, res, next) {
    connect.query(
      `UPDATE CategoryItem SET CategoryName="${req.body.categoryName}" WHERE CategoryId = ${req.params.slug}`,
      function (err, result) {
        err ? res.json({ status: 403 }) : res.json({ status: 200 });
      }
    );
  }
  // [post] /category
  post(req, res, next) {
    connect.query(
      `INSERT INTO CategoryItem(CategoryName) VALUES("${req.body.categoryName}")`,
      function (err, result) {
        err ? res.json({ status: 403 }) : res.json({ status: 200 });
      }
    );
  }
  // [delete] /category:slug
  delete(req, res, next) {
    connect.query(
      `DELETE FROM CategoryItem WHERE CategoryId = ${req.params.slug}`,
      function (err, result) {
        err ? res.json({ status: 403 }) : res.json({ status: 200 });
      }
    );
  }
}

module.exports = new CategoryController();
