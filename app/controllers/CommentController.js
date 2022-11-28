const connect = require("../../connect");

class CommentController {
  // [get] /comment/:slug
  slug(req, res, next) {
    connect.query(
      `SELECT * FROM comments WHERE productid = ${req.params.slug}`,
      function (err, result) {
        err
          ? res.json({ status: 403 })
          : res.json({ result: result, status: 200 });
      }
    );
  }
}

module.exports = new CommentController();
