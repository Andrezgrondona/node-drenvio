const express = require('express');
const router = express.Router();
const precioController = require('../controllers/precioController');

// Ruta para obtener el precio 
router.get('/:id_usuario/:nombre_producto', precioController.getPrecioEspecial);

module.exports = router;
