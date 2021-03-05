const connect = require('../sctructure/database/connect.js')
const _query = require('../sctructure/database/queries.js')

const return_error = require('../sctructure/functions/Return_error.js')
const objToQuerry_str = require('../sctructure/functions/objToQuerry_str.js')
class Casos{


    add(caso,res){
        console.log(caso)
        const sql = ('INSERT INTO Casos SET ?')
        _query(sql,res,caso)
    }

    search(res,id = null){
        if (id == null){
            const sql = 'SELECT * FROM ufonight.casos'
            _query(sql,res)
        }else{
            const sql = `SELECT * FROM ufonight.casos WHERE id=${id}`
            _query(sql,res)
        }
        
    }

    delete(res, id){
        const sql = `Delete from ufonight.casos where id=${id}`
        _query(sql,res)
    }

    update(id,caso,res){
        const sql = `UPDATE ufonight.casos SET ? where id=${id}`
        _query(sql,res,caso)
    }

    

    precise_search(res,search_for,filters = ''){

        
        const sql = (`SELECT * FROM ufonight.casos WHERE LOWER ( REPLACE (Titulo,' ' ,'')) RLIKE LOWER ( REPLACE('${search_for}',' ','')) ${objToQuerry_str(filters)}`)
        console
        _query(sql,res)
        
    }
    
}


module.exports = new Casos