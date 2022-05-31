const express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

//Database

router.get('/stock/', async (req, res, next) => {

    const connection = await mysql.createConnection({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root', 
        database: 'stock',
        port: 3306, 
    });
    
    const id = req.params.id
    const rows = await connection.query(`SELECT * from stock_hw`);
    res.json(rows[0])
});
  
module.exports = router;
