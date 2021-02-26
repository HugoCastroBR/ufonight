const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '32119294h',
    database: 'ufonight' 
})

module.exports = conexao