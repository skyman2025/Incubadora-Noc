const express = require('express');
const router = express.Router();
const entrenamientocontroller = require('../controllers/entrenamientocontrollers');

router.get('/', entrenamientocontroller.obtenerEntrenamientos);
router.get('/:id', entrenamientocontroller.obtenerEntrenamientoId);
router.post('/', entrenamientocontroller.crearEntrenamiento);
router.put('/:id', entrenamientocontroller.actualizarEntrenamiento);
router.delete('/:id', entrenamientocontroller.borrarEntrenamiento);

module.exports = router;

