const  Empresas = require('../models/empresas');
const { Op } = require('sequelize');

const obtenerTodasEmpresas = async (req, res) => {
  const { nombre } = req.query;
  try {
    const empresas = await Empresas.findAll({
      where: nombre ? { nombre_empresa: { [Op.like]: `%${nombre}%` } } : undefined
    });
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const cargaEmpresa = async (req, res) => {
  try {
    const empresa = await Empresas.create(req.body);
    res.status(201).json(empresa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const actualizaEmpresa = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Empresas.update(req.body, {
      where: { id_empresa: id }
    });
    if (updated) {
      const empresa = await Empresas.findByPk(id);
      res.json(empresa);
    } else {
      res.status(404).json({ error: 'Empresa no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eliminaEmpresa = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Empresas.destroy({
      where: { id_empresa: id }
    });
    if (deleted) {
      res.json({ mensaje: 'Empresa eliminada' });
    } else {
      res.status(404).json({ error: 'Empresa no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 module.exports={
  obtenerTodasEmpresas,
  cargaEmpresa,
  actualizaEmpresa,
  eliminaEmpresa
 };