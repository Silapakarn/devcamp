var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');


//Lab Promise
// router.get('/',async function (req, res, next) {
//   const connection = await mysql.createConnection({

//       host: 'localhost',
//       user: 'root', // <== ระบุให้ถูกต้อง
//       //password: 'root', // <== ระบุให้ถูกต้อง
//       database: 'book_shop', // <== ระบุ database ให้ถูกต้อง
//       port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)

//       }).then((connection) => {
        

//         const userPromise = connection.query('SELECT firstname from employee');
//         const classroomPromise = connection.query('SELECT Title from book');

//         Promise.all([userPromise, classroomPromise])

//           .then((rows) => {
//           res.json({
//             employee: rows[0][0],
//             book: rows[1][0],
//           });

//         })
//           .catch((err) => {
//           res.json({ error: err });
//         });
      
//         // ปิด connection
//         connection.end();
//       });
//   });
 


//Lab 3 async await
//ต้องอยู่ภายใน function ที่มี keyword ว่า async นำหน้าเท่านั้น
router.get('/', async (req, res, next) => {

  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
      database: 'book_shop',
      port: 3306, 

   });

  try {
      //สั่งให้รอจนกว่าจะเสร็จถึงจะไปบรรทัดถัดไปได้
      const Fn_employee = await connection.query('SELECT firstname from employee');
      const Title_book = await connection.query('SELECT Title from book');
      res.json({
        employee: Fn_employee[0],
        book: Title_book[0],
   })
   //console.log(res[0])


   await connection.end();

    } catch (error) {
      res.json({ error: err });
    }
  })

module.exports = router;
