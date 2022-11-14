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
};
