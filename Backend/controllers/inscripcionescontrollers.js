const { Op } = require('sequelize');
const Inscripcion = require('../models/inscripciones');
//para relaciones entre tablas
const { cursos } = require('../models'); 
const { usuarios } = require('../models'); 
//
const jwt = require('jsonwebtoken');


const cargaInscripcion = async (req, res) => {
  console.log('datos:', req.body);
  const { id_usuario, id_curso, fecha_inscripcion } = req.body;

  if (!id_usuario || !id_curso || !fecha_inscripcion) {
    return res.status(400).json({ error: 'Faltan datos requeridos.' });
  }

  try {
    const nuevaInscripcion = await Inscripcion.create({
      id_usuario,
      id_curso,
      fecha_inscripcion
    });

    res.status(201).json({
      message: 'Inscripción registrada exitosamente.',
      id_inscripcion: nuevaInscripcion.id_inscripcion
    });
  } catch (error) {
    console.error('Error al registrar inscripción:', error);
    res.status(500).json({ error: 'Error al registrar la inscripción.' });
  }
};

const getAllInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();
    res.status(200).json(inscripciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener inscripciones.' });
  }
};

const getInscripcionById = async (req, res) => {
//obtiene todas las inscripciones de un usuario por id
  try {
    const idUsuario = req.params.id;
    if (!Number.isInteger(parseInt(idUsuario))) {
      return res.status(400).json({ error: 'El ID de usuario debe ser un número entero válido.' });
    }
    const inscripcion = await Inscripcion.findAll({
      where: { id_usuario: idUsuario }});
    if (!inscripcion || inscripcion.length === 0) {
      return res.status(404).json({ error: 'No se encontraron inscripciones para este usuario.' });
    }
      res.status(200).json(inscripcion);
    } catch (error) {
      console.error('Error al buscar inscripciones:', error);
      res.status(500).json({ error: 'Error al buscar inscripciones.' }); 
  }

};

  const InscripcionesCursosByUser = async (req, res) => {
    //obtiene todas las inscripciones de un usuario  por id 
    try {
      const idUsuario = req.params.id;
      if (!Number.isInteger(parseInt(idUsuario))) {
        return res.status(400).json({ error: 'El ID de usuario debe ser un número entero válido.' });
      }
      
      const data = await Inscripcion.findAll({
        where: { id_usuario: idUsuario },
        include: {
          model: cursos,
          as: 'curso',
          attributes: ['nombre_curso']
        }
      });
      res.json(data);
      } catch (error) {
        console.error('Error al buscar inscripciones mediante relaciones entre tablas:', error);
        res.status(500).json({ error: 'Error al buscar inscripciones mediante relaciones entre tablas.' }); 
    }
  };



const updateInscripcion = async (req, res) => {
  const { id_usuario, id_curso, fecha_inscripcion } = req.body;

  try {
    const inscripcion = await Inscripcion.findByPk(req.params.id);

    if (!inscripcion) {
      return res.status(404).json({ error: 'Inscripción no encontrada.' });
    }

    await inscripcion.update({ id_usuario, id_curso, fecha_inscripcion });

    res.status(200).json({ message: 'Inscripción actualizada correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar inscripción.' });
  }
};

const deleteInscripcion = async (req, res) => {
  try {
    const deleted = await Inscripcion.destroy({ where: { id_inscripcion: req.params.id } });

    if (deleted === 0) {
      return res.status(404).json({ error: 'Inscripción no encontrada.' });
    }

    res.status(204).send(); // Eliminado sin contenido
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar inscripción.' });
  }
};


const getAlumnosPorCurso = async (req, res) => {
  const idCurso = req.params.id;

  try {
    const inscripciones = await Inscripcion.findAll({
      where: { id_curso: idCurso },
      include: {
        model: usuarios,
        as: 'usuario',
        attributes: ['id_usuario', 'nombre', 'apellido', 'email']
      }
    });

    const alumnos = inscripciones.map(i => i.usuario); // sacamos solo los datos del usuario

    res.status(200).json(alumnos);
  } catch (error) {
    console.error('Error al obtener alumnos del curso:', error);
    res.status(500).json({ error: 'Error al obtener alumnos del curso.' });
  }
};

module.exports = {
    cargaInscripcion,
    getAllInscripciones,
    getInscripcionById,
    getAlumnosPorCurso,
    updateInscripcion,
    deleteInscripcion,
    InscripcionesCursosByUser
};
