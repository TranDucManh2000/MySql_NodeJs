const express = require("express");
const router = require("./routers");
const cors = require("cors");
const app = express();
const port = 3001;

// const morgan = require("morgan");
// app.use(morgan("combined", { stream: true }));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

router(app);

app.listen(port, () => {
  console.log(`API ${port}`);
});
