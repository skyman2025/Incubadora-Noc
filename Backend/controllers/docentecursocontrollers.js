const DocenteCurso = require('../models/docentecurso');
const { usuarios: Usuarios, cursos } = require('../models');

const asignarDocenteACurso = async (req, res) => {
  const { id_usuario, id_curso } = req.body;

  try {
    const existe = await DocenteCurso.findOne({ where: { id_usuario, id_curso } });
    if (existe) return res.status(400).json({ message: 'Ya está asignado.' });

    await DocenteCurso.create({ id_usuario, id_curso });
    res.status(201).json({ message: 'Asignación creada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al asignar docente al curso.', error });
  }
};


const obtenerAsignaciones = async (req, res) => {
  try {
    const asignaciones = await DocenteCurso.findAll();
    res.status(200).json(asignaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener asignaciones.', error });
  }
};


const obtenerAsignacion = async (req, res) => {
  const { id_usuario, id_curso } = req.params;

  try {
    const asignacion = await DocenteCurso.findOne({ where: { id_usuario, id_curso } });
    if (!asignacion) return res.status(404).json({ message: 'Asignación no encontrada en obtener.' });

    res.status(200).json(asignacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar la asignación.', error });
  }
};


const actualizarAsignacion = async (req, res) => {
  const { id_usuario, id_curso } = req.params;
  const { nuevo_id_usuario, nuevo_id_curso } = req.body;

  try {
    const asignacion = await DocenteCurso.findOne({ where: { id_usuario, id_curso } });
    if (!asignacion) return res.status(404).json({ message: 'Asignación no encontrada para actualizacion.' });

    // Eliminar la vieja y crear la nueva (porque las PK no se pueden actualizar directamente)
    await asignacion.destroy();
    await DocenteCurso.create({
      id_usuario: nuevo_id_usuario ?? id_usuario,
      id_curso: nuevo_id_curso ?? id_curso
    });

    res.status(200).json({ message: 'Asignación actualizada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la asignación.', error });
  }
};


const eliminarAsignacion = async (req, res) => {
  const { id_usuario, id_curso } = req.params;

  try {
    const deleted = await DocenteCurso.destroy({ where: { id_usuario, id_curso } });
    if (!deleted) return res.status(404).json({ message: 'Asignación no encontrada para eliminacion.' });

    res.status(200).json({ message: 'Asignación eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la asignación.', error });
  }
};


const getCursosPorDocente = async (req, res) => {
  const id_usuario = req.params.id; 

  try {
    const docente = await Usuarios.findByPk(id_usuario, {
      include: {
        model: cursos,
        as: 'cursosAsignados'
      }
    });

    if (!docente) {
      return res.status(404).json({ message: 'Docente no encontrado' });
    }

    res.status(200).json({
      docente: {
        id: docente.id_usuario,
        nombre: docente.nombre,
        apellido: docente.apellido,
        foto: docente.foto
      },
      cursos: docente.cursosAsignados
    });
  } catch (error) {
    console.error('Error al obtener cursos del docente:', error);
    res.status(500).json({ message: 'Error interno del servidor', error });
  }
};


module.exports = {
  asignarDocenteACurso,
  obtenerAsignaciones,
  obtenerAsignacion,
  actualizarAsignacion,
  eliminarAsignacion,
  getCursosPorDocente
};
