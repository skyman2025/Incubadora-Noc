'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contenido', {
      id_contenido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cursos', 
          key: 'id_curso'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      modulo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM(
          'pdf', 'docx', 'odt', 'txt', 'xlsx', 'ods',
          'pptx', 'odp', 'mp4', 'webm', 'avi', 'mp3',
          'wav', 'jpg', 'jpeg', 'png', 'gif', 'svg',
          'genially', 'canva', 'iframe', 'url'
        ),
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      fecha_publicacion: {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contenido');
  }
};
