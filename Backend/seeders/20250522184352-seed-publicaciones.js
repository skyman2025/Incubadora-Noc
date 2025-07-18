'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publicaciones', [
      {
        id_publicacion: 1,
        titulo: 'Curso de Node.js con Sequelize',
        contenido: 'Aprende a desarrollar APIs REST con Node y Sequelize.',
        fecha_publicacion: '2025-05-01',
        tipo: 'curso',
        estado: 'activo'
      },
      {
        id_publicacion: 2,
        titulo: 'Capacitación en Angular',
        contenido: 'Frontend avanzado con Angular y consumo de APIs.',
        fecha_publicacion: '2025-05-02',
        tipo: 'capacitacion',
        estado: 'activo'
      },
      {
        id_publicacion: 3,
        titulo: 'Entrenamiento Fullstack',
        contenido: 'Entrenamiento intensivo para desarrolladores fullstack.',
        fecha_publicacion: '2025-05-03',
        tipo: 'entrenamiento',
        estado: 'inactivo'
      },
      {
        id_publicacion: 4,
        titulo: 'Curso de MySQL Avanzado',
        contenido: 'Profundiza en consultas complejas y optimización.',
        fecha_publicacion: '2025-05-04',
        tipo: 'curso',
        estado: 'activo'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Publicaciones', null, {});
  }
};
