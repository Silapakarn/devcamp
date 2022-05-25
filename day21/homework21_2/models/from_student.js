const express = require('express');
var router = express.Router();

//Database
const pool = require('../config/database')

 router.get('/user_student/:id', async (req, res, next) => {
    console.log('set variable')
    const [rows] = await pool.query('SELECT * from user_student WHERE id = ?',[req.params.id]);
    req.myJSON = rows;
    next();
 });

 
module.exports = router;