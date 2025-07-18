const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const Entrenamiento = sequelizeUsers.define('Entrenamiento', {

    id_entrenamiento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_entrenamiento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    empresa_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'EntrenamientosLaborales',
    timestamps: false
  });

  module.exports= Entrenamiento;
