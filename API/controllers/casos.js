const Casos = require('../models/Casos.js')



module.exports = app => {


    app.route('/casos')
        .get((req,res) => {
            Casos.search(res)
        })
        .post((req,res) =>{
            const caso = req.body
    
            Casos.add(caso,res)
        })


    app.get('/casos/:id', (req, res) => { 
        const id = parseInt(req.params.id);

        Casos.search(res,id)

    })

    app.route('/casos/:id')
        .delete((req, res) => { 
            const id = parseInt(req.params.id);

            Casos.delete(res,id)
        })

        .patch((req,res) =>{

            const id = parseInt(req.params.id);
            const caso = req.body
            console.log(caso)

            Casos.update(id,caso,res)
        })


    app.route('/search?:search')
        .get((req,res) =>{  
            const search = req.query.search
            Casos.precise_search(res,search)
        })
        .post((req,res) =>{
            const search = req.query.search
            const filters = req.body
            
            Casos.precise_search(res,search,filters)
        })


}