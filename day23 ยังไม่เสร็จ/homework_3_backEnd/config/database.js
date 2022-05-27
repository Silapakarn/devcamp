const mysql = require('mysql2/promise')

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', 
    database: 'stock',
    port: 3306, 
});

module.exports = pool;