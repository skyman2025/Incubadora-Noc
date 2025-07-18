const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const asistencias = sequelizeUsers.define('asistencias', {
    id_asistencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_inscripcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

    estado: {
        type: DataTypes.ENUM('presente', 'ausente', 'justificado'), 
        allowNull: false,
    }
},
{
    tableName: 'Asistencia',  
    timestamps: false,      
});

module.exports = asistencias;
