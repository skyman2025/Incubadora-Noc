'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Empresas', [
      {
        id_empresa: 1,
        nombre_empresa: 'Santex Technologies',
        descripcion: 'Empresa global que ofrece soluciones de desarrollo de software a medida y consultoría en IT, con experiencia en empresas multinacionales.',
        contacto_nombre: 'Luis Martínez',
        contacto_email: 'luis.martinez@santexgroup.com',
        contacto_telefono: '1166789012'
      },
      {
        id_empresa: 2,
        nombre_empresa: 'Xacademy Partners',
        descripcion: 'Plataforma educativa dedicada a la formación de desarrolladores, con programas intensivos en tecnología y metodologías ágiles.',
        contacto_nombre: 'Ana Gómez',
        contacto_email: 'ana.gomez@xacademy.com',
        contacto_telefono: '1167890123'
      },
      {
        id_empresa: 3,
        nombre_empresa: 'DevSolutions',
        descripcion: 'Proveedor de soluciones tecnológicas a medida, especializados en desarrollo de aplicaciones para empresas de diferentes sectores.',
        contacto_nombre: 'Carlos Rodríguez',
        contacto_email: 'carlos.rodriguez@devsolutions.com',
        contacto_telefono: '1168901234'
      },
      {
        id_empresa: 4,
        nombre_empresa: 'TechLabs',
        descripcion: 'Red de incubadoras de startups en el ámbito tecnológico, impulsando el crecimiento de nuevas empresas en el sector digital y software.',
        contacto_nombre: 'Javier Pérez',
        contacto_email: 'javier.perez@techlabs.com',
        contacto_telefono: '1169012345'
      },
      {
        id_empresa: 5,
        nombre_empresa: 'Innovative IT',
        descripcion: 'Consultoría en transformación digital y desarrollo de plataformas tecnológicas para mejorar la eficiencia empresarial.',
        contacto_nombre: 'Laura Martínez',
        contacto_email: 'laura.martinez@innovativeit.com',
        contacto_telefono: '1169123456'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empresas', null, {});
  }
};
