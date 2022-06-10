const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-nodejs.cmirytc5ztqm.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "95969596",
  database: "login_nodejs",
});

db.connect();

module.exports = db;
