'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProgramasCredito', {
      id_programa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_programa: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      tasa_interes: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      duracion: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      requisitos: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProgramasCredito');
  }
};
