const Casos = require('../models/Casos.js')

module.exports = app => {
    app.get('/casos', (req, res) => {
        
        Casos.search(res)
    })


    app.post('/casos', (req,res) =>{
        const caso = req.body
        console.log(caso)

        Casos.add(caso,res)
    })


    app.get('/casos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        

        Casos.search(res,id)
    })
}