var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');


//Post 
router.post('/', async function(req, res) {
  const connection = await mysql.createConnection({
        host: 'localhost' ,
        user: 'root', 
        database: 'password_encryption', 
        port: 3306, 
  })

  const { username, password, first_name, last_name, email, mobile_phone} = req.body; // รับ post json object
 

  const result = await connection.execute(
    `INSERT INTO user (username, password, first_name, last_name, email, mobile_phone) VALUES ('${username}','${password}','${first_name}','${last_name}','${email}','${mobile_phone}')`
  ); // insert ข้อมูล


    // ปิด connection
    await connection.end();

    // ตอบกลับ client เป็น id ของ user ที่ insert
    res.send({ id: result[0].insertId });
})


module.exports = router;

