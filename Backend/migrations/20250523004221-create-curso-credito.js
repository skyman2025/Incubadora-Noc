'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CursoCredito', {
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Cursos',
          key: 'id_curso'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_programa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'ProgramasCredito',
          key: 'id_programa'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CursoCredito');
  }
};
