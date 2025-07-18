'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      id_empresa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_empresa: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      contacto_nombre: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      contacto_email: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      contacto_telefono: {
        type: Sequelize.STRING(15),
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Empresas');
  }
};
