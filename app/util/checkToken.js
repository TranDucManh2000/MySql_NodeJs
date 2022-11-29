const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  checkTokenValidate: function (req, res, next) {
    const authenHeader = req.headers.authorization?.split(" ")[1];
    // const authenBody = req.body.accsetToken
    jwt.verify(authenHeader, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
      err ? res.json({ error: 401 }) : next();
    });
  },
  checkTokenAdmin: function (req, res, next) {
    const authenHeader = req.headers.authorization?.split(" ")[1];
    jwt.verify(authenHeader, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
      err
        ? res.status(403).send({ error: "403 Forbidden" })
        : data.type === 1
        ? next()
        : res.status(403).send({ error: "403 Forbidden" });
    });
  },
  getEmailAuthen: function (req) {
    const authenHeader = req.headers.authorization?.split(" ")[1];
    const email = jwt.verify(
      authenHeader,
      process.env.ACCESS_TOKEN_SECRET,
      (err, data) => {
        return err ? null : data.email;
      }
    );
    return email;
  },
};
