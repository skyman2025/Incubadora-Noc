const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const inscripcion = sequelizeUsers.define('Inscripcion', {
    id_inscripcion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_inscripcion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'Inscripciones',
    timestamps: false
  });

module.exports = inscripcion;