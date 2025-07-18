const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const contenido = sequelizeUsers.define('contenido', {
    id_contenido: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modulo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('pdf','docx','odt','txt','xlsx','ods','pptx','odp','mp4','webm','avi','mp3','wav','jpg','jpeg','png','gif','svg','genially','canva','iframe','url'),
      allowNull: false 
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_publicacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'Contenido',
    timestamps: false
  });

  contenido.beforeCreate((contenido, options) => {
  if (!contenido.fecha_publicacion) {
    contenido.fecha_publicacion = new Date().toISOString().split('T')[0];
  }
});


module.exports = contenido;

