'use strict';
const bcrypt = require('bcryptjs'); 

module.exports = {
  async up(queryInterface, Sequelize) {
    const passwordHash = await bcrypt.hash('adminxacademy2025', 10); 

    return queryInterface.bulkInsert('Usuarios', [{
      nombre: 'Admin',
      apellido: 'Principal',
      fecha_nacimiento: '1990-01-01',
      direccion: 'Base',
      telefono: '123456789',
      email: 'adminroot@gmail.com',
      password: passwordHash,
      dni: 12345678,
      especialidad: 'Administrador del sistema',
      tipo_usuario: 'admin',
      foto: '/uploads/12345678-admin.png',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', { email: 'adminroot@gmail.com' }, {});
  }
};
