const connect = require("../../connect");

// token
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class UserController {
  // [get] /user
  index(req, res) {
    connect.query("SELECT Name FROM Products", function (err, result) {
      res.json(result);
    });
  }
  // [post] /user/login
  login(req, res) {
    connect.query(
      `SELECT Email,PassWord,Type FROM Users WHERE Email = "${req.body.email}" and PassWord = ${req.body.password}`,
      function (err, result) {
        result.length <= 0
          ? res.json({ status: 400, data: "data not found" })
          : res.json(
              // token
              {
                accsetToken: jwt.sign(
                  {
                    email: req.body.email,
                    type: result[0].Type,
                  },
                  process.env.ACCESS_TOKEN_SECRET,
                  {
                    expiresIn: "8h",
                  }
                ),
              }
            );
      }
    );
  }
  // [post] /user/logout
  logout(req, res) {
    res.json({ status: "may xoa token di chu goi tao lam gi :)" });
  }
}

module.exports = new UserController();
