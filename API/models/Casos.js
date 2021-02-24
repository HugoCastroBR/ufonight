const connect = require('../sctructure/connect.js')


class Casos{
    

    return_error(res,error,results,status_error = 201,status_result = 400){
        if (error){
    
            return res.status(status_error).json({error})

        }else{
            
            return res.status(status_result).json({results})
        }
    }
    
    add(caso,res){


        const sql = 'INSERT INTO Casos SET ?'

        connect.query(sql, caso,(error,results) =>{
            this.return_error(res,error,results)
        })

    }

    search(res,id = null){
        if (id == null){
            connect.query('SELECT * FROM ufonight.casos',(error,results) =>{
                this.return_error(res,error,results)
            })
        }else{
            connect.query(`SELECT * FROM ufonight.casos WHERE id=${id}`,(error,results) =>{
                this.return_error(res,error,results)
            })
        }
        
    }

    delete(res, id){
        connect.query(`Delete from ufonight.casos where id=${id}`,(error,results) =>{
            this.return_error(res,error,results)
        })
        
    }

    update(id,caso,res){
        const sql = `UPDATE ufonight.casos SET ? where id=${id}`
        connect.query(sql,caso,(error,results) =>{
            this.return_error(res,error,results)
        })
    }
}


module.exports = new Casos