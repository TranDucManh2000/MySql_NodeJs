const mysql = require("mysql");

var connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "DEMO_MY_SQL",
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
