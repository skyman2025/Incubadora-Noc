const express =require('express');
const router = express.Router();
const perfilalumno = require('../controllers/perfilalumno')


// router.get('/' , (req, res)=>{res.send('Perfil Docente')})
router.get('/', perfilalumno.getAllAlumnos);
router.get('/:id_usuario', perfilalumno.getSingleAlumno);
router.post('/', perfilalumno.createAlumno);
router.put('/:id_usuario', perfilalumno.updateAlumno);
router.delete('/:id_usuario',perfilalumno.deleteAlumno);

module.exports = router;