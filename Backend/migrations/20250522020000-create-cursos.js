'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cursos', {
      id_curso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_curso: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      duracion: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      tipo: {
        type: Sequelize.ENUM('presencial', 'a distancia'),
        allowNull: true
      },
      costo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      fecha_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      fecha_fin: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      foto: {
        type: Sequelize.STRING(250),
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cursos');
  }
};
