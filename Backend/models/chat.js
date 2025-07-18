const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

  const Mensaje = sequelizeUsers.define('mensajes', {
     id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    client_offset: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'mensajes',
    timestamps: false
  });

module.exports = Mensaje; 