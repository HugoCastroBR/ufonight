const { querrier_str } = require("../../models/Casos")

function objToQuerry_str(filters){

    let sql_filters = ''

    Object.keys(filters).forEach(Element => {
        sql_filters += (`AND LOWER(REPLACE(${Element},' ','')) = LOWER(REPLACE ('${filters[Element]}',' ','')) `)
    })

    return sql_filters
}

module.exports = objToQuerry_str