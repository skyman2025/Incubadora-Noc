const Teacher = require("../models/user");
const mysql = require("../db/database")
const { validationResult } = require('express-validator');

// recupera todos los docentes
const getAllteachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.findAll({
            where: { tipo_usuario: 'docente' }
        });
        res.status(200).json(teachers);
    } catch (error) {
        next(error);
    }
};
// recupera un solo docente
const getSingleTeacher = async (req, res, next) => {
    
    try {
        const teacherId = req.params.id_usuario; 
        if (!Number.isInteger(Number(teacherId))) {
            return res.status(400).json({ error: "Usa un ID válido para encontrar al docente" });
        }
        const teacher = await Teacher.findOne({ where: { id_usuario: teacherId, tipo_usuario: "docente" } });

        if (!teacher) {
            return res.status(400).json({ error: "Profesor no encontrado" });
        }

        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error tratando de encontrar al profesor", error });
    }
};


// crea un solo docente
const createTeacher = async (req, res, next) =>{

   const errors = validationResult(req);
       
   if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
   }
       
       const {nombre, apellido,fecha_nacimiento, direccion,telefono,email,password,dni,especialidad,tipo_usuario} = req.body;

   try{
    const newTeacher = await Teacher.create({
        nombre,
        apellido,
        fecha_nacimiento,
        direccion,
        telefono,
        email,
        password,
        dni,
        especialidad,
        tipo_usuario,
        
      });
      res.status(201).json(newTeacher);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error al tratar de crear el perfil del profesor", details: error.message });
    }
};


// modifica un solo docente
const updateTeacher = async (req, res, next) => {

   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   const { nombre, apellido,fecha_nacimiento, direccion,telefono,email,password,dni,especialidad,tipo_usuario} = req.body;
   const teacherId = req.params.id_usuario;

   try {
       const [updated] = await Teacher.update(
           { nombre, apellido,fecha_nacimiento, direccion,telefono,email,password,dni,especialidad,tipo_usuario},
           { where: { id_usuario: teacherId } }
       );

       if (updated === 0) {
           return res.status(404).json({ error: 'Profesor no encontrado' });
       }

       const updatedTeacher = await Teacher.findOne({ where: { id_usuario: teacherId } });

       res.status(200).json(updatedTeacher);
   } catch (error) {
       res.status(500).json({ error: 'Algo salió mal al tratar de modificar el perfil del profesor', details: error.message });
   }
};
// elimina un solo docente
const deleteTeacher = async (req, res, next) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }

   const teacherId = req.params.id_usuario;

   try {
    const deleted = await Teacher.destroy({ where: { id_usuario: teacherId , tipo_usuario: "docente"} });

    if (deleted === 0) {
        return res.status(404).json({ error: 'Profesor no encontrado' });
    }

    res.status(204).send();
} catch (error) {
    res.status(500).json({ error: 'Algo salió mal tratando de eliminar al profesor', details: error.message });
}
};

module.exports = {
    getAllteachers,
    getSingleTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher
}