
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Post
app.post("/api/product", (req, res) => {
  const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,

  });
  connection.connect();


  //Variables 
  const product_name = req.body.product_name
  const stock_left = req.body.stock_left
  const category = req.body.category

  connection.query(
    `insert into stock_hw (product_name, stock_left, category) values ('${product_name}' , '${stock_left}', '${category}')`,
    (err, rows, field) => {
      res.json({ ID: rows.insertId, new_product: rows });
    }
  );
  connection.end();
});


//Put
app.put("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,

  });
  connection.connect();

  //Variables 
  const id = req.params.id
  const product_name = req.body.product_name
  const stock_left = req.body.stock_left
  const category = req.body.category

  connection.query(
    `update stock_hw set product_name = '${product_name}' , stock_left = ${stock_left}, category = '${category}' where id = ${id}`,
    
    (err, rows, field) => {
      if (rows.affectedRows == 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("ID does not exist");
      }
    }
  );
  connection.end();
});

 

//Listening Port
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});