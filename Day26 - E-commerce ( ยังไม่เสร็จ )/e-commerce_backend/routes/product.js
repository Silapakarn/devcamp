var express = require('express');
var router = express.Router();
const mysql = require('mysql2');


//--------------Get---------------------------
router.get("/api/product/",  (req, res) => {
  const connection = mysql.createConnection({
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  });
connection.connect();

//Variables ID
const id = req.params.id
connection.query(
      `select * from stock_hw where id`,
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


//-----------------------Delete-----------------------
router.delete("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  });
  connection.connect();

  //Variables id
  const id = req.params.id
  connection.query(
    `delete from stock_hw where id = ${id}`,
    (err, rows, fields) => {

      if (rows.affectedRows == 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("CANNOT DELETE. No product in database");
      }
    }
  );
  connection.end();
});


//-----------------------Post----------------------------
router.post("/api/product", (req, res) => {
  const connection = mysql.createConnection({
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,

  });
  connection.connect();

  //Variables 
  const product_name = req.body.product_name
  const stock_left = req.body.stock_left
  const category = req.body.category

  console.log(product_name)
  console.log(stock_left)
  console.log(category)

  connection.query(
    `insert into stock_hw (product_name, stock_left, category) values ('${product_name}' , '${stock_left}', '${category}')`,
    (err, rows, field) => {
      res.json({ ID: rows.insertId, new_product: rows });
    }
  );
  connection.end();
  
  res.send("res")
});


//------------------------Put---------------------------
router.put('/api/product/:id', (req, res) => {
  const connection = mysql.createConnection( {
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  });
  
  //Variables 
  const id = req.params.id
  const product_name = req.body.product_name
  const stock_left = req.body.stock_left
  const category = req.body.category

  connection.query(`update stock_hw set product_name = '${product_name}' , stock_left = ${stock_left}, category = '${category}' where id = ${id}`, (err, rows, fields) => {
        console.log(err);
          if(rows.affectedRows == 1) {
              res.status(200).send({message: "Updated!"})
          } else {
              res.status(400).send({message: "ID does not exist"});
          }
          // res.json(rows);
      });
  connection.end();
})

module.exports = router;