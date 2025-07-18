const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const CursoCredito = sequelizeUsers.define('CursoCredito', {
  id_curso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_programa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
  tableName: 'CursoCredito',
  timestamps: false
});

module.exports = CursoCredito;
