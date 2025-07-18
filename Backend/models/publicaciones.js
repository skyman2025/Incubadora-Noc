const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const publicacion = sequelizeUsers.define('Publicacion', {
    id_publicacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_publicacion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: DataTypes.NOW 
    },
    tipo: {
      type: DataTypes.ENUM('curso', 'capacitacion', 'entrenamiento'),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('activo', 'inactivo'),
      allowNull: true
    }
  }, {
    tableName: 'Publicaciones',
    timestamps: false
  });
module.exports = publicacion;
