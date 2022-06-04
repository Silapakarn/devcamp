var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//Get
router.get("/api/product/", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,
  });

connection.connect();


connection.query(
      `select * from stock_hw`,
      (err, rows, fields) => {
      
      if (rows.length !== 0) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("No products in database");
      }
    }
  );
  connection.end();
});

module.exports = router;
