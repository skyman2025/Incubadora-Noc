const  Publicacion  = require('../models/publicaciones');
const { Op } = require('sequelize');

// Obtener todas las publicaciones (con filtro)
exports.obtenerPublicaciones = async (req, res) => {
  const { titulo, tipo, estado } = req.query;
  const where = {};
  if (titulo) where.titulo = { [Op.like]: `%${titulo}%` };
  if (tipo) where.tipo = tipo;
  if (estado) where.estado = estado;

  try {
    const publicaciones = await Publicacion.findAll({ where });
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.crearPublicacion = async (req, res) => {
  try {
    const nueva = await Publicacion.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.actualizarPublicacion = async (req, res) => {
  const { id } = req.params;
  try {
    const [modificada] = await Publicacion.update(req.body, {
      where: { id_publicacion: id }
    });
    if (modificada) {
      const actualizada = await Publicacion.findByPk(id);
      res.json(actualizada);
    } else {
      res.status(404).json({ error: 'Publicación no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarPublicacion = async (req, res) => {
  const { id } = req.params;
  try {
    const borrada = await Publicacion.destroy({ where: { id_publicacion: id } });
    if (borrada) {
      res.json({ mensaje: 'Publicación eliminada' });
    } else {
      res.status(404).json({ error: 'Publicación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
