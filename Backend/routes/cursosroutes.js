const express = require('express');
const router = express.Router();
const cursoscontrollers = require('../controllers/cursoscontrollers');

const multer = require('multer');
const path = require('path');

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const nombreCurso = req.body.nombre_curso || 'sin_nombre_curso';
    const ext = path.extname(file.originalname);
    cb(null, `${nombreCurso}_${Date.now()}${ext}`);
  }
});

const upload2 = multer({ 
  storage: storage2,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no válido. Solo se permiten JPEG o JPG y PNG.'));
    }
  }
});

router.get('/', cursoscontrollers.obtenerTodosCursos);
router.get('/info/:id', cursoscontrollers.obtenerCursoporId);
//router.post('/', cursoscontrollers.cargaCursos);
router.post('/', upload2.single('foto'), cursoscontrollers.cargaCursos);
router.put('/:id', upload2.single('foto'), cursoscontrollers.actualizaCursos);
router.delete('/:id', cursoscontrollers.eliminaCursos);

module.exports = router;
