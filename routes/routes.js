const express = require('express');
const router = express.Router();
const controller = require('../controllers/data.controller');

const getData = controller;

router.get('/datos', getData);

module.exports = router;