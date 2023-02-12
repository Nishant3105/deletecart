const mysql=require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Ke$31hav15'
})

module.exports = pool.promise()