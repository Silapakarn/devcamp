var express = require('express');
var router = express.Router();
const mysql = require('mysql2');


//-------------------------Get---------------------------
router.get("/product/",  (req, res) => {
  const connection = mysql.createConnection({
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  });
connection.connect();

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
router.delete("/product/:id", (req, res) => {
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
  )
  console.log(rows)

  connection.end();
});





//-----------------------Post----------------------------
router.post("/product", (req, res) => {
  const connection = mysql.createConnection({
      host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
      user: "dbmasteruser",
      password : "!kan1234",
      database: "dbDatabase_1",
      port: 3306,
  })

  connection.connect((err)=> {
    if(!err)
    console.log('connected')
    else
    console.log("failed", err)
  })

  //Variables 
  console.log(req.body.product_name)
 
  connection.query(
    `insert into stock_hw (product_name, stock_left, category, photo) values ('${req.body.product_name}' , '${req.body.stock_left}', '${req.body.category}', '${req.body.photo}')`,
    (err, rows, field) => {
      console.log(err)
      res.json(rows);
    }
  )
  console.log(rows)
  
  connection.end()
})





//------------------------Put---------------------------
router.put('/product/:id', (req, res) => {
  const connection = mysql.createConnection( {
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  })

  connection.connect((err)=> {
    if(!err)
    console.log("connected")
    else
    console.log("failed", err)
  })
  
  connection.query(`update stock_hw set product_name = '${req.body.product_name}' , stock_left = ${req.body.stock_left}, category = '${req.body.category}' where id = ${req.params.id}`, (err, rows, fields) => {
        console.log(err);
          if(rows.affectedRows == 1) {
              res.status(200).send({message: "Updated!"})
          } else {
              res.status(400).send({message: "ID does not exist"});
          }
          //res.json(rows);
      })
  connection.end();
})

module.exports = router;