const mysql2 = require('mysql2/promise')

const connection = mysql2.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'password_encryption'
})

module.exports = connection