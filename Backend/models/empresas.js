
const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const empresas = sequelizeUsers.define('Empresas', {
    id_empresa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contacto_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contacto_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contacto_telefono: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'Empresas',
    timestamps: false
  });
module.exports = empresas;
