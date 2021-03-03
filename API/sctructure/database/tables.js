const { table } = require("console")

class Tables {
    init(connect){
        this.connect = connect
        this.criarBD()
    }

    criarBD(){

        

//         CREATE TABLE IF NOT EXISTS ufonight.TagTB (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(25) NOT NULL, PRIMARY KEY(id));
//         CREATE TABLE IF NOT EXISTS ufonight.ItemTagTB(ItemID INT NOT NULL, TagID INT NOT NULL)




        // const sql = `CREATE TABLE IF NOT EXISTS Atendimentos(id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),
        // servico varchar(20) NOT NULL, data datetime NOT NULL,dataCriacao datetime NOT NULL ,status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id) )`
        const sql = `CREATE TABLE IF NOT EXISTS Casos(id int NOT NULL AUTO_INCREMENT, Titulo varchar(80) NOT NULL, Verificado BOOL,
        Pais varchar(100), Estado varchar(100), Cidade varchar(100), Tipo_nave varchar(100), especie varchar(100),descricao text, nome_contatado_testemunhas text,verificado_por varchar(100),observacoes text, PRIMARY KEY(id) )`
        
        this.connect.query( sql,erro => {
            if (erro){
                console.log(erro)
            }else{
                console.log('Tables conectada com sucesso')
            }
        })
    }
}

module.exports = new Tables    