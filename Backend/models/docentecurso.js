
const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const docentecurso = sequelizeUsers.define('docentecurso', {


    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id_usuario'
      }
    },
    id_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'cursos',
        key: 'id_curso'
      }
    }
  }, {
    tableName: 'DocenteCurso',
    timestamps: false
  });

module.exports = docentecurso;