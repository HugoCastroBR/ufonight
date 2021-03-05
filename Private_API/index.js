const customExpress = require('./config/customExpress.js')
const connect = require('./structure/database/connect.js')
const tables = require('./structure/database/tables.js')


connect.connect(error => {
    if (error){
        console.log(error)
    }else{
        console.log('Conectado ao banco de dados com sucesso, porta 3306')

        tables.init(connect)

        const app = customExpress()
        app.listen(3100, () => console.log('servidor rodando na porta 3306'))
    }
})