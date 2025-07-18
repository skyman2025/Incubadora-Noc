
const express = require('express');
const router = express.Router();
const asistenciasControllers = require('../controllers/asistenciascontrollers');

router.post('/', asistenciasControllers.chargeAsist);  
router.get('/', asistenciasControllers.getAllAsist);  
router.get('/:id', asistenciasControllers.getAsistById);  
router.put('/:id', asistenciasControllers.updateAsistById);  

module.exports = router;
