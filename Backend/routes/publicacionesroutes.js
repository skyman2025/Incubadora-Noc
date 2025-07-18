const express = require('express');
const router = express.Router();
const publicacionescontrollers = require('../controllers/publicacionescontrollers');

router.get('/', publicacionescontrollers.obtenerPublicaciones);
router.post('/', publicacionescontrollers.crearPublicacion);
router.put('/:id', publicacionescontrollers.actualizarPublicacion);
router.delete('/:id', publicacionescontrollers.eliminarPublicacion);

module.exports = router;
