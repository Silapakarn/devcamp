var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');


//Post 
router.post('/', async function(req, res) {
  const connection = await mysql.createConnection({
        host: 'localhost' ,
        user: 'root', 
        database: 'password_encryption', 
        port: 3306, 
  })

  const { username, password, first_name, last_name, email} = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง database
  console.log(hashedPassword)

  const result = await connection.execute(
    `INSERT INTO user (username, password, first_name, last_name, email) VALUES ('${username}','${hashedPassword}','${first_name}','${last_name}','${email}')`
  ); // insert ข้อมูล

    // ปิด connection
    await connection.end();

    // ตอบกลับ client เป็น id ของ user ที่ insert
    res.send({ id: result[0].insertId });
})



module.exports = router;
