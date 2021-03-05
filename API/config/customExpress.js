const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')

let corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
}

module.exports = () =>{
    const app = express()
    app.use(cors(corsOptions))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign().include('controllers')
            .into(app)

    return app
}