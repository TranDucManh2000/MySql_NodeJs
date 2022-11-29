const connect = require("../../connect");
const { getEmailAuthen } = require("../util/checkToken");

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
  // [post] /comment/:slug
  post(req, res, next) {
    let email = getEmailAuthen(req);
    connect.query(
      `SELECT name, email, img,usersid
      FROM users
      WHERE email = '${email}'`,
      function (err, result) {
        console.log(result[0]);
        err
          ? res.json({ status: 403 })
          : connect.query(
              `INSERT INTO comments(commentdata,times,usersid,productid,avatar,name) VALUES("${req.body.comment}","${req.body.date}",${result[0].usersid},${req.params.slug},"${result[0].img}","${result[0].name}")`,
              function (err, results) {
                err ? res.json({ status: 403 }) : res.json({ status: 200 });
              }
            );
      }
    );
  }
}

module.exports = new CommentController();
