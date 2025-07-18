const { Op } = require('sequelize');
const User = require('../models/user');

const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const bcrypt = require('bcryptjs');

const multer = require('multer');
const path = require('path');



const createUser = async (req, res) => {
  try {
    const {
      nombre, apellido, fecha_nacimiento, direccion,
      telefono, email, password, dni, tipo_usuario, especialidad
    } = req.body;

    const fotoPath = req.file ? `/uploads/${req.file.filename}` : null;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Archivo recibido en backend:', req.file);

      const newUser = await User.create({
        nombre,
        apellido,
        fecha_nacimiento,
        direccion,
        telefono,
        email,
        password: hashedPassword,
        dni,
        tipo_usuario,
        especialidad,
        foto: fotoPath
      });
    console.log('Usuario creado en BD:', newUser.toJSON());

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      user: {
        id_usuario: newUser.id_usuario,
        nombre: newUser.nombre,
        apellido: newUser.apellido,
        email: newUser.email,
        tipo_usuario: newUser.tipo_usuario
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

//***************************************************************
const getAllUsers = async (req, res) => {
 
    const { nombre, dni ,apellido} = req.query;

    const whereConditions = {};

  //Las uso solo si se envian como parametros
    if (nombre) {
        whereConditions.nombre = { [Op.like]: `%${nombre}%` }; // coincidencia o semejante
    }

    if (dni) {
        whereConditions.dni = dni;
    }

    if (apellido) {
        whereConditions.apellido = { [Op.like]: `%${apellido}%` }; // coincidencia o semejante
    }

    try {
        const users = await User.findAll({ where: whereConditions,  attributes: { exclude: ['password'] }});

        if (users.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los usuarios', details: error.message });
    }

};
//***************************************************************
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {attributes: { exclude: ['password'] } });  

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el Usuario' });
    }
};
//***************************************************************

const updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    await user.update(req.body);

    const updatedUser = user.get({ plain: true });
    delete updatedUser.password;

    res.json({
      message: 'Usuario actualizado exitosamente',
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', details: error.message });
  }
};


//***************************************************************

const deleteUsuario = async (req, res) => {

  const usuarioId = req.params.id;

  try {
    const deleted = await User.destroy({ where: { id_usuario: usuarioId } });

    if (deleted === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario', details: error.message });
  }
};


//***************************************************************
const userLogin = async (req, res) => {

  const { email, password } = req.body;
  console.log('Datos recibidos:', req.body);

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas: email no encontrado' });
    }
    
    // Comparo como si fuera una contraseña encriptada
    const PasswordValido = await bcrypt.compare(password, user.password); 
    // Si no es encriptada, comparo directamente 
    const PasswordTextoValido = user.password === password;

    if (!(PasswordValido || PasswordTextoValido)) {
      return res.status(401).json({ message: 'Credenciales incorrectas: password incorrecto' });
    }

    res.json({ message: 'Login exitoso', 
             user: { id_usuario: user.id_usuario, nombre:user.nombre, apellido:user.apellido,email: user.email,
                     fecha_nacimiento:user.fecha_nacimiento,direccion:user.direccion,
                     telefono:user.telefono ,dni:user.dni, especialidad:user.especialidad,tipo_usuario:user.tipo_usuario,foto:user.foto} });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

//***************************************************************

const LoginconGithub = async (req, res) => {
      console.log('Datos recibidos desde GitHub:', req.body);
  try {
    const {
      nombre,
      apellido,
      email,
      foto
    } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'El email es obligatorio' });
    }

    let usuario = await User.findOne({ where: { email } });

    //// como defino cargar la foto ese es el error
    const password='github_oauth';
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!usuario) {
      usuario = await User.create({
        nombre,
        apellido,
        fecha_nacimiento: new Date('1900-01-01'),
        direccion: 'No proporcionada',
        telefono: 322511111,
        email,
        password:hashedPassword, // Encriptar para login tradicional
        dni: 33777777,
        especialidad: null,
        tipo_usuario: 'alumno', // o 'docente'
        foto
      });
    }else{
    console.log('Error email existente:');  
    }

    // Podría crear un token JWT para mantener sesión
    // const token = jwt.sign({ id: usuario.id_usuario, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '2h' });

    return res.status(200).json({ message: 'Usuario registrado correctamente', usuario });

  } catch (error) {
    console.error('Error en LoginconGithub:', error);
    return res.status(500).json({ message: 'Error al crear el usuario' });
  }
};
//***************************************************************
module.exports = {
    userLogin,
    createUser,
    getAllUsers,
//    buscarUsersFiltrados,
    getUserById,
    updateUserById,
    deleteUsuario,
    LoginconGithub
};
