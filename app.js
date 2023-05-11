const express = require('express');
const router = require('./routes/routes');
const app = express();
require('dotenv').config();

//CONSTANTES
const port= process.env.PORT || 3300;

// MIDDLEWARE
app.use(express.static('public'));
app.set('view engine', 'ejs');

//RUTAS
app.use('/', router);

// LEVANTO EL SERVER
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});