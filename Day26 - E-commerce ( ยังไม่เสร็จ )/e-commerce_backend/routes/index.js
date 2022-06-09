var express = require('express');
var router = express.Router();
const mysql = require("mysql2");

/* GET home page. */
router.get("/", (req, res) => {

  const connection = mysql.createConnection({
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  });

connection.connect();

//Variables ID
const data = connection.query(
     `SELECT * FROM stock_hw;`
  );
  console.log(data);
  res.json({ 
    Message: "Welcome",
    data : data[0]
  })
  connection.end();
});
module.exports = router;
