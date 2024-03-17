import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Shaily1201',
    database: 'hackx',
  }).promise()

const result = await pool.query("select * from Patient")
console.log(result)