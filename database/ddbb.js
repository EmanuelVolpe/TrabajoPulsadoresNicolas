const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error) => {
    if (error) {
        console.log(`No se pudo conectar a la Base de Datos: \n Error:${error}`);
        return;
    }
    console.log('Conexión Exitosa con la Base de Datos');
});

module.exports = connection;