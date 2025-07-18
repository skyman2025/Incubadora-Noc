const express = require('express');
const router = express.Router();

const inscripcionesController = require('../controllers/inscripcionescontrollers');

router.post('/', inscripcionesController.cargaInscripcion);  
router.get('/', inscripcionesController.getAllInscripciones);
router.get('/:id', inscripcionesController.getInscripcionById);
router.get('/cursos/:id', inscripcionesController.InscripcionesCursosByUser);
router.put('/:id', inscripcionesController.updateInscripcion);
router.delete('/:id', inscripcionesController.deleteInscripcion);
router.get('/curso/:id/alumnos', inscripcionesController.getAlumnosPorCurso);

module.exports = router;