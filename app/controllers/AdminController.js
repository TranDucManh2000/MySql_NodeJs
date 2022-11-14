const connect = require("../../connect");

class AdminController {
  // [post] /admin/register
  register(req, res) {
    connect.query(
      `SELECT Email,PassWord,Type FROM Users WHERE Email = "${req.body.email}"`,
      function (err, result) {
        result.length === 0
          ? connect.query(
              `INSERT INTO Users(Email,UserName,PassWord,Type,PhoneNumber) VALUES("${req.body.email}","${req.body.userName}","${req.body.passWord}",1,${req.body.phoneNumber})`,
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
}

module.exports = new AdminController();
