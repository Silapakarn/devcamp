
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "stock",
  port: 3306,
});


//Get
app.get("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,
  });

  connection.connect();

  //Variables id
  const id = req.params.id
  connection.query(
    `select * from stock_hw where id = ${id}`,
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



//Delete
app.delete("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
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

 

//Listening Port
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});