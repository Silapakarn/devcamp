const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const mysql = require("mysql2");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//Get employee
app.get("/api/employee/:id_employee", (req, res) => {

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "personal_data",
      port: 3306,

    });
    connection.connect();
  
    //Variables id
    const id_employees = req.params.id_employee
    connection.query(
      `select * from employee where id_employee = ${id_employees}`,
      (err, rows, fields) => {
  
        if (rows.length !== 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).send("No employee in database");
        }
      }
    );
    connection.end();
  });


//Post employee
// app.post("/api/employee", (req, res) => {
//     const connection = mysql.createConnection({

//       host: "localhost",
//       user: "root",
//       database: "personal_data",
//       port: 3306,

//     });
//     connection.connect();

//     //Variables 
//     let data_employees = {
//        first_name : req.body.first_name,
//        last_name : req.body.last_name,
//        phone_number : req.body.phone_number,  
//        email : req.body.email,
//        address : req.body.address,
//        sub_district : req.body.sub_district,
//        district : req.body.district,
//        province : req.body.province,
//        postcode : req.body.postcode,
//        ID_card_number : req.body.ID_card_number
  
//     }
//     console.log(data_employees);
//     // connection.query(
//     //     `insert into employee (first_name, last_name, phone_number, email, address, sub_district, district, province, postcode, ID_card_number) values ('${first_name}' , '${last_name}', ${phone_number}, '${email}' ,'${address}', '${sub_district}', '${district}', '${province}' ,${postcode}, ${ID_card_number})`,
//     let sql_employees = 'INSERT INTO employee SET ?'
//     connection.query(sql_employees, data_employees, (employees_err, employees_rows, field) => {
          
//       let data_company = {
//         //id_employee key
//         id_employee : employees_rows.insertId,
//         company_name : req.body.company_name,
//         company_address : req.body.company_address,
//         duration : req.body.duration,  
//         position : req.body.position,
//      }
//      console.log(data_company.id_employee);

//      let sql_company = 'INSERT INTO company SET ?';
//      connection.query(sql_company, data_company, (company_err, company_rows, field) => {
        
//         console.log(company_err);
//         res.json(company_rows);
//         })
//     connection.end();
//   })
// })




//Post employee
app.post("/api/employee", (req, res) => {
  const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "personal_data",
    port: 3306,

  });
  connection.connect();

  //Variables 
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const phone_number = req.body.phone_number  
  const email = req.body.email
  const address = req.body.address
  const sub_district = req.body.sub_district
  const district = req.body.district
  const province = req.body.province
  const postcode = req.body.postcode
  const ID_card_number = req.body.ID_card_number

  connection.query(
      `insert into employee (first_name, last_name, phone_number, email, address, sub_district, district, province, postcode, ID_card_number) values ('${first_name}' , '${last_name}', '${phone_number}', '${email}' ,'${address}', '${sub_district}', '${district}', '${province}' ,'${postcode}', '${ID_card_number}')`,
    (err, result, field) => {
      
        console.log(err);
        res.json(result)
    
    })
    connection.end();
})



// //Post company
app.post("/api/company", (req, res) => {
  const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "personal_data",
    port: 3306,

  });
  connection.connect();

  //Variables 
  const company_name = req.body.company_name
  const company_address = req.body.company_address
  const duration = req.body.duration  
  const position = req.body.position
  const id_employee = req.body.id_employee

  connection.query(
      `insert into company (company_name, company_address, duration, position, id_employee) values ('${company_name}' , '${company_address}', ${duration}, '${position}' ,${id_employee})`,
    (err, result, field) => {

      console.log(err)
      res.json(result)

    }
  );
  connection.end();
});


//Listening Port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  