const Casos = require('../models/Casos.js')

const querystring = require('querystring')


module.exports = app => {
    app.get('/casos', (req, res) => {
        
        Casos.search(res)
    })


    app.post('/casos', (req,res) =>{
        const caso = req.body


        Casos.add(caso,res)
    })


    app.get('/casos/:id', (req, res) => { 
        const id = parseInt(req.params.id);

        Casos.search(res,id)

    })

    app.delete('/casos/:id', (req, res) => { 
        const id = parseInt(req.params.id);

        Casos.delete(res,id)
    })

    app.patch('/casos/:id', (req,res) =>{

        const id = parseInt(req.params.id);
        const caso = req.body
        console.log(caso)

        Casos.update(id,caso,res)
    })

    app.get('/search?:search',(req,res) =>{
        const search = req.query.search
        Casos.precise_search(res,search)
    })

    app.post('/search?:search',(req,res) =>{
        const search = req.query.search
        const filters = req.body
        Casos.precise_search(res,search,filters)
    })


}