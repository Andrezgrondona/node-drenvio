

const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Ruta para obtener productos en stock
router.get('/', productosController.getProductosEnStock);


module.exports = router;
