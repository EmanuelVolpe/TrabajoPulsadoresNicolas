const obtenerDatos = (connection, func) => {
    connection.query('SELECT * FROM datos', func);
};

module.exports = {obtenerDatos};