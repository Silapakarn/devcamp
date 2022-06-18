var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// (POST) /api/auth/token
router.post('/token', async function (req, res) {

    const connection = await mysql.createConnection ({
      host: "ls-315b8391259e8722e7bd322a40544d562258104f.cv9orhuto3jf.ap-southeast-1.rds.amazonaws.com",
      user: "dbmasteruser",
      password : "!kan1234",
      database: "dbDatabase_1",
      port: 3306, 
    });

    
    const { username, password, first_name, last_name, email } = req.body; // รับ post json object
    const result = await connection.query(
      `SELECT * FROM password_encryption WHERE username='${username}'`
    );
    console.log(result[0]);
    // ปิด connection
    await connection.end();
   
    // พบ record
    if (result[0].length > 0) {
      const passwordMatch = await bcrypt.compare(password, result[0][0].password);
      console.log(passwordMatch);

      if (passwordMatch) {
            // JWT implementation here
            const privateKey = 'codecamp_very_$secr3T!';
            const token = jwt.sign(
                {
                    id: result[0][0].id,
                    username: result[0][0].username,
                    first_name: result[0][0].first_name,
                    last_name: result[0][0].last_name,
                    email: result[0][0].email
                },
                privateKey,
                { expiresIn: '300000ms' }
                );
            res.json({ token: token });

      } else {
        res.status(401).send({ error: 'invalid credential' });
        return;
      }
    } else {
      res.status(401).send({ error: 'user not found' });
      return;
    }
});

module.exports = router;