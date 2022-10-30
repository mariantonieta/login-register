import mysql from 'mysql2'
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Maria_2305',
    database: 'blog'
})