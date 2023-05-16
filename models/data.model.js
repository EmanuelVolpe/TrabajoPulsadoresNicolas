const obtenerDatos = (connection, func) => {
    connection.query('SELECT * FROM datos', func);
};

const borrarDatos = (connection) => {
    connection.query('CALL borrado()');
};

module.exports = {obtenerDatos, borrarDatos};