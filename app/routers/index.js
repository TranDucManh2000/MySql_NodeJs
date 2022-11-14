const user = require("./user");
const product = require("./product");

function router(app) {
  app.use("/user", user);
  app.use("/product", product);
}

module.exports = router;
