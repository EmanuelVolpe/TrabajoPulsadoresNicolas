const connection = require('../database/ddbb');
const datos = require('../models/data.model');
let path = require('path');

const getData = (req, res) => {
    datos.obtenerDatos(connection, (error, results) => {
        if (error) {
            throw error;
        } else {
            console.log(results);
            const registros = results;
            res.render(path.join(__dirname, '/../views/index.ejs'),
                {
                    titulo: 'TABLA DE REGISTROS DEL RUSO MONTANI',
                    registros: registros
                }
            );
        }
    });
};

module.exports = getData;