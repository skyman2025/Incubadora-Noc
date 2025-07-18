const { Op } = require('sequelize');
const Entrenamiento = require('../models/entrenamientos');

const obtenerEntrenamientoId = async (req, res) => {
  try {
    const entrenamiento = await Entrenamiento.findByPk(req.params.id);
    if (!entrenamiento) return res.status(404).json({ error: 'No encontrado' });
    res.json(entrenamiento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const crearEntrenamiento = async (req, res) => {
  try {
    const nuevo = await Entrenamiento.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const obtenerEntrenamientos = async (req, res) => {
  try {
    const entrenamientos = await Entrenamiento.findAll();
    res.json(entrenamientos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarEntrenamiento = async (req, res) => {
  try {
    const result = await Entrenamiento.update(req.body, {
      where: { id_entrenamiento: req.params.id }
    });
    if (result[0] === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json({ mensaje: 'Actualizado correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

 const borrarEntrenamiento = async (req, res) => {
  try {
    const result = await Entrenamiento.destroy({
      where: { id_entrenamiento: req.params.id }
    });
    if (result === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  obtenerEntrenamientoId,
  crearEntrenamiento,
  actualizarEntrenamiento,
  obtenerEntrenamientos,
  borrarEntrenamiento
};