const { table } = require("console")

class Tables {
    init(connect){
        this.connect = connect
        this.CreateAllTables()
    }


    _CreateTable(sql){
        this.connect.query( sql,erro => {
            if (erro){
                console.log(erro)
            }else{
                console.log('Tables connection successful')
            }
        })
    }

    CreateAllTables(){


        const sqlUsers = `CREATE TABLE IF NOT EXISTS Users(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(80) NOT NULL,
            email VARCHAR(100) NOT NULL,
            senha VARCHAR(100) NOT NULL,
            ativo BOOL NOT NULL,
            foto_path varchar(1024)
            ) `

        const sqlPosts = ` CREATE TABLE IF NOT EXISTS posts(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            id_api INT NOT NULL,
            titulo VARCHAR(80) NOT NULL,
            html TEXT 
            )`

        
        this._CreateTable(sqlUsers)
        this._CreateTable(sqlPosts)
        

    }
}

module.exports = new Tables 