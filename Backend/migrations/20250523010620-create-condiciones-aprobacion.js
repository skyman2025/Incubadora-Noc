'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CondicionesAprobacion', {
      id_condicion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Cursos', 
          key: 'id_curso'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      asistencia_minima: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      nota_minima: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CondicionesAprobacion');
  }
};
