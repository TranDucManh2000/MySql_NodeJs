const user = require("./user");
const product = require("./product");
const category = require("./category");
const admin = require("./admin");

function router(app) {
  app.use("/user", user);
  app.use("/admin", admin);
  app.use("/category", category);
  app.use("/product", product);
}

module.exports = router;
