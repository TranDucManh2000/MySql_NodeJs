const connect = require("../../connect");

// token
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class UserController {
  // [post] /user/register
  register(req, res) {
    connect.query(
      `SELECT Email,PassWord,Type FROM Users WHERE Email = "${req.body.email}"`,
      function (err, result) {
        result.length === 0
          ? connect.query(
              `INSERT INTO Users(Email,UserName,PassWord,Type,PhoneNumber) VALUES("${req.body.email}","${req.body.userName}","${req.body.passWord}",0,${req.body.phoneNumber})`,
              function (err, result) {
                console.log(err);
                err
                  ? res.json({ status: 500, mesager: "register error" })
                  : res.json({ status: 200 });
              }
            )
          : res.json({ status: 500, mesager: "email already exist" });
      }
    );
  }
  // [post] /user/login
  login(req, res) {
    connect.query(
      `SELECT Email,PassWord,Type FROM Users WHERE Email = "${req.body.email}" and PassWord = "${req.body.password}"`,
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
