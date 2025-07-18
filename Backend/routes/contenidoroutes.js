const express = require('express');
const router = express.Router();
const contenidosController = require('../controllers/contenidoControllers');

router.get('/', contenidosController.obtenerAllContenidos);
router.get('/:id', contenidosController.obtenerContenidosById);
router.get('/curso/:id', contenidosController.contenidosByCursoById);
router.post('/', contenidosController.crearContenido);
router.put('/:id', contenidosController.actualizarContenido);

module.exports = router;
