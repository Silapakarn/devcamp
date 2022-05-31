var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');



/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
      database: 'test', // 
      port: 3306, 

   });

  try {

   const courses = await connection.query(`SELECT courses.name as course_name, instructors.name as instructor
   from courses
   left JOIN instructors on courses.id = instructors.id
   order by courses.id;`);
    res.json({
      courses: courses[0]
   });

   await connection.end();

   } catch (error) {
          res.json({ error: err });
      }
  });


module.exports = router;
