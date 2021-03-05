
function return_error(res,error,results,status_error = 400,status_result = 201){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Content-Type', 'application/json');
    res.header('Accept', 'application/json');
    res.header('Access-Control-Allow-Credentials', 'true');

    if (error){
        console.log('Cliente Erro !')
        return res.status(status_error).json({error})
    }else{
        return res.status(status_result).json({results})
    }
}

module.exports = return_error