const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '32119294h',
    database: 'ufonight_private' 
})

module.exports = connect
