const connection = require('../database/ddbb');
const datos = require('../models/data.model');
let path = require('path');

const getData = (req, res) => {
    datos.obtenerDatos(connection, (error, results) => {
        if (error) {
            throw error;
        } else {
            const registros = results;
            res.render(path.join(__dirname, '/../views/index.ejs'),
                {
                    titulo: 'TABLA DE REGISTROS',
                    registros: registros
                }
            );
            if(results.length >= 1000){
                datos.borrarDatos(connection);
            }
        }
    });
};

module.exports = getData;