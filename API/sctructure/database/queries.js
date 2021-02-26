const connect = require('./connect.js')
const return_error = require('../functions/Return_error')


function _run_query(sql,res,to_apply){
    connect.query(sql,to_apply,(error,results)=>{
        return_error(res,error,results)
})
}

async function _query(params,res,to_apply = ''){
    
    const sql = await _run_query(params,res = res,to_apply)
    
    
}

module.exports = _query