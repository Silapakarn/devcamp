var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');



/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
      //  password: 'root', // <== ระบุใหถูกตอง
      database: 'codecamp', // <== ระบุ database ใหถูกตอง
      port: 3306, 

   });

  try {

   const user = await connection.query('SELECT * from user');

    res.json({
      user: user[0],

   });

   await connection.end();

   } catch (error) {
          res.json({ error: err });
      }
  });


module.exports = router;
