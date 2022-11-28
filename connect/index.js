const mysql = require("mysql");

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CLONE_YOUTUBE",
  port: 4306,
});

connect.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("API RUN");
  }
});

module.exports = connect;
