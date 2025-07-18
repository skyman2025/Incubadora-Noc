'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Publicaciones', {
      id_publicacion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      contenido: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fecha_publicacion: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      tipo: {
        type: Sequelize.ENUM('curso', 'capacitacion', 'entrenamiento'),
        allowNull: true
      },
      estado: {
        type: Sequelize.ENUM('activo', 'inactivo'),
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Publicaciones');
  }
};
