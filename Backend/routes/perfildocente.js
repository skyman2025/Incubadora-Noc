const express =require('express');
const router = express.Router();
const perfildocente = require('../controllers/perfildocente')
// const { verifyToken } = require('../controllers/userscontrollers'); 

// router.get('/' , (req, res)=>{res.send('Perfil Docente')})
router.get('/', perfildocente.getAllteachers);
router.get('/:id_usuario', perfildocente.getSingleTeacher);
router.post('/', perfildocente.createTeacher);
router.put('/:id_usuario', perfildocente.updateTeacher);
// router.delete('/:id_usuario',verifyToken, perfildocente.deleteTeacher);

module.exports = router;