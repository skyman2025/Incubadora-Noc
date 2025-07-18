const express = require('express');
const router = express.Router();
const empresascontrollers = require('../controllers/empresascontrollers');

router.get('/', empresascontrollers.obtenerTodasEmpresas);
router.post('/', empresascontrollers.cargaEmpresa);
router.put('/:id', empresascontrollers.actualizaEmpresa);
router.delete('/:id', empresascontrollers.eliminaEmpresa);

module.exports = router;
