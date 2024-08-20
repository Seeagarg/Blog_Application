const mysql = require('mysql2')

require('dotenv').config();

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    user:process.env.DB_USER
})





module.exports = pool;