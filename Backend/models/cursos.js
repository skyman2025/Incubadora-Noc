const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const cursos = sequelizeUsers.define('Cursos', {
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false ,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_curso: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM('gratuito', 'arancelado', 'capacitacion', 'en linea'),
      allowNull: true
    },
    costo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'Cursos',
    timestamps: false
  });

module.exports = cursos;