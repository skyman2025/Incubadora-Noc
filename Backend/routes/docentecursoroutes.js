const express = require('express');
const router = express.Router();
const docenteCursoController = require('../controllers/docentecursocontrollers');

router.post('/', docenteCursoController.asignarDocenteACurso);
router.get('/cursos/:id', docenteCursoController.getCursosPorDocente);
router.get('/all', docenteCursoController.obtenerAsignaciones);
router.get('/:id_usuario/:id_curso', docenteCursoController.obtenerAsignacion);
router.put('/:id_usuario/:id_curso', docenteCursoController.actualizarAsignacion);
router.delete('/:id_usuario/:id_curso', docenteCursoController.eliminarAsignacion);


module.exports = router;
