var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');



/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
      //  password: 'root', // <== ระบุให้ถูกตอง
      database: 'test', // <== ระบุ database ใหถูกตอง
      port: 3306, 

   });

  try {

   const courses = await connection.query(`SELECT courses.id, courses.name as courses_name, instructors.name as instructors_name FROM courses LEFT JOIN instructors on  instructors.id = courses.teach_by ORDER BY courses.id;`);
    res.json({
      courses: courses[0]
   });

   await connection.end();

   } catch (error) {
          res.json({ error: err });
      }
  });


module.exports = router;
