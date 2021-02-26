
function return_error(res,error,results,status_error = 400,status_result = 201){
    if (error){
        console.log('Cliente Erro !')
        return res.status(status_error).json({error})
    }else{
        return res.status(status_result).json({results})
    }
}

module.exports = return_error