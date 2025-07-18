const Alumno = require("../models/user");
const mysql = require("../db/database")
const { validationResult } = require('express-validator');

// recupera todos los Alumnos
const getAllAlumnos = async (req, res, next) => {
    try {
        const alumnos = await Alumno.findAll({
            where: { tipo_usuario: 'alumno' }
        });
        res.status(200).json(alumnos);
    } catch (error) {
        next(error);
    }
};
// recupera un solo docente
const getSingleAlumno = async (req, res, next) => {
    
    try {
        const alumnoId = req.params.id_usuario; 
        if (!Number.isInteger(Number(alumnoId))) {
            return res.status(400).json({ error: "Usa un ID válido para encontrar al alumno" });
        }
        const alumno = await Alumno.findOne({ where: { id_usuario: alumnoId, tipo_usuario: "alumno" } });

        if (!alumno) {
            return res.status(400).json({ error: "Alumno no encontrado" });
        }

        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error tratando de encontrar al alumno", error });
    }
};


// crea un solo docente
const createAlumno = async (req, res, next) =>{

   const errors = validationResult(req);
       
   if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
   }
       
       const {nombre, apellido,fecha_nacimiento, direccion,telefono,email,password,dni,especialidad,tipo_usuario} = req.body;

   try{
    const newAlumno = await Alumno.create({
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
      res.status(201).json(newAlumno);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error al tratar de crear el perfil del alumno", details: error.message });
    }
};


// modifica un solo docente
const updateAlumno = async (req, res, next) => {

   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   const { nombre, apellido,fecha_nacimiento, direccion,telefono,email,password,dni,especialidad,tipo_usuario} = req.body;
   const alumnoId = req.params.id_usuario;

   try {
       const [updated] = await Alumno.update(
           { nombre, apellido,fecha_nacimiento, direccion,telefono,email,password,dni,especialidad,tipo_usuario},
           { where: { id_usuario: alumnoId } }
       );

       if (updated === 0) {
           return res.status(404).json({ error: 'Alumno no encontrado' });
       }

       const updatedAlumno = await Alumno.findOne({ where: { id_usuario: alumnoId } });

       res.status(200).json(updatedAlumno);
   } catch (error) {
       res.status(500).json({ error: 'Algo salió mal al tratar de modificar el perfil del alumno', details: error.message });
   }
};
// elimina un solo docente
const deleteAlumno = async (req, res, next) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }

   const alumnoId = req.params.id_usuario;

   try {
    const deleted = await Alumno.destroy({ where: { id_usuario: alumnoId , tipo_usuario: "alumno"} });

    if (deleted === 0) {
        return res.status(404).json({ error: 'Alumno no encontrado' });
    }

    res.status(204).send();
} catch (error) {
    res.status(500).json({ error: 'Algo salió mal tratando de eliminar al alumno', details: error.message });
}
};

module.exports = {
    getAllAlumnos,
    getSingleAlumno,
    createAlumno,
    updateAlumno,
    deleteAlumno
}