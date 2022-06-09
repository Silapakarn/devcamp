var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');


//------------------------Post----------------------------- 
router.post('/register', async function(req, res) {
  const connection = await mysql.createConnection({
    host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password : "!kan1234",
    database: "dbDatabase_1",
    port: 3306,
  })

  const { username, password, first_name, last_name, email, mobile_phone} = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง database
  console.log(hashedPassword)

  
  const result = await connection.execute(
    `INSERT INTO password_encryption (username, password, first_name, last_name, email, mobile_phone) VALUES ('${username}','${hashedPassword}','${first_name}','${last_name}','${email}','${mobile_phone}')`
  ); // insert ข้อมูล

    // ปิด connection
    await connection.end();
    
    console.log(result)
    // ตอบกลับ client เป็น id ของ user ที่ insert
    res.send({ id: result[0].insertId });
})

module.exports = router;
