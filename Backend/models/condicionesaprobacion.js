const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const condicionAprobacion = sequelizeUsers.define('CondicionAprobacion', {
  id_condicion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_curso: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  asistencia_minima: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nota_minima: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  }
}, {
  tableName: 'CondicionesAprobacion',
  timestamps: false
});

module.exports = condicionAprobacion;
