'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const password1 = await bcrypt.hash('Carlos777docente', 10);
    const password2 = await bcrypt.hash('Laura654alumno', 10);

    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Carlos',
        apellido: 'Ramírez',
        fecha_nacimiento: new Date('2000-04-15'),
        direccion: 'Av. Siempre Viva 77',
        telefono: 123456789,
        email: 'carlosRamirez@gmail.com',
        password: password1,
        dni: 42225678,
        especialidad: 'Matemáticas',
        tipo_usuario: 'docente',
        foto: '/uploads/profesor2.png'
      },
      {
        nombre: 'Laura',
        apellido: 'González',
        fecha_nacimiento: new Date('1995-08-25'),
        direccion: 'Sprinfield 654',
        telefono: 987654321,
        email: 'lauraGonzalez@gmail.com',
        password: password2,
        dni: 38226543,
        especialidad: null,
        tipo_usuario: 'alumno',
        foto: '/uploads/laura.jpg'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
