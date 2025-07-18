const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const programacredito = sequelizeUsers.define('programacredito', {
  id_programa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre_programa: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  tasa_interes: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  requisitos: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'ProgramasCredito', 
  timestamps: false
});

module.exports = programacredito;
