const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');
//tabla usuarios reemplasara a  tabla alumno y tabla docente
const users = sequelizeUsers.define('users', {
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tipo_usuario: {
        type: DataTypes.ENUM('alumno','docente'),
        allowNull: false,
    },
    foto: {
       type: DataTypes.STRING,
       allowNull: true
}

},
{
    tableName: 'Usuarios',  
    timestamps: false,      
});

module.exports = users;
