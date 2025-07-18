const { Op } = require('sequelize');
const Asistencia = require('../models/asistencias');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');


const chargeAsist = async (req, res) => {
    try{
        const newAsist = await Asistencia.create(req.body);
        res.status(201).json(newAsist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al cargar asistencia' });
    }
};

const getAllAsist = async (req, res) => {
    try {
        const asists = await Asistencia.findAll(); // Obtener lista de asistencias

        if (asists.length === 0) {
            return res.status(404).json({ message: 'No hay asistencias cargadas' });
        }
        res.status(200).json(asists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las asistencias' });
    }
};


const getAsistById = async (req, res) => {
    try {
        const asist = await Asistencia.findByPk(req.params.id); 

        if (!asist) {
            return res.status(404).json({ message: 'Asistencia no encontrada' });
        }

        res.status(200).json(asist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la asistencia' });
    }
};


const updateAsistById = async (req, res) => {
    const { id } = req.params;
    try {
        const asist = await Asistencia.findByPk(id);
        if (!asist) {
            return   res.status(404).json({ message: 'Asistencia no encontrado' });
        }
        await asist.update(req.body);
        res.json(asist);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la asistencia' });
    }
};
module.exports = {
    chargeAsist,
    getAllAsist,
    getAsistById,
    updateAsistById,
};
