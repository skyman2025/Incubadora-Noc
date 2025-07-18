'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cursos', [
      {
        id_curso: 1,
        nombre_curso: 'Carpintería',
        descripcion: 'Este curso de carpintería está diseñado para enseñar desde lo básico hasta lo avanzado. Aprende a manejar las herramientas y técnicas más importantes para crear proyectos de carpintería con precisión y seguridad.',
        duracion: 60,
        tipo: 'presencial',
        costo: 3000.00,
        fecha_inicio: '2025-05-06',
        fecha_fin: '2025-07-06',
        foto: '/uploads/carpinteria.png'
      },
      {
        id_curso: 2,
        nombre_curso: 'Diseño',
        descripcion: 'Para aquellos interesados en desarrollar habilidades en la creación y desarrollo de proyectos visuales impactantes. Aprenderás las herramientas y técnicas esenciales para diseñar piezas gráficas para una amplia gama de medios, desde impresos hasta digitales.',
        duracion: 45,
        tipo: 'presencial',
        costo: 8000.00,
        fecha_inicio: '2025-06-01',
        fecha_fin: '2025-07-15',
        foto: '/uploads/diseno.png'
      },
      {
        id_curso: 3,
        nombre_curso: 'Informática',
        descripcion: 'Dirigido a personas que desean aprender a utilizar las herramientas informáticas esenciales para la vida diaria, el trabajo y la educación. A través de este curso, adquirirás conocimientos fundamentales sobre el uso de la computadora, programas de oficina y navegación en internet, lo que te permitirá desenvolverte con confianza en un mundo digital.',
        duracion: 90,
        tipo: 'a distancia',
        costo: 9000.00,
        fecha_inicio: '2025-05-15',
        fecha_fin: '2025-08-15',
        foto: '/uploads/informatica.png'
      },
      {
        id_curso: 4,
        nombre_curso: 'Mecánica',
        descripcion: 'Principios fundamentales de la reparación y mantenimiento de vehículos. Este curso te proporcionará las herramientas y conocimientos esenciales para entender el funcionamiento de los motores, los sistemas de transmisión, frenos, suspensión, y mucho más. Ya sea que busques aprender para uso personal o como base para una carrera en la mecánica, este curso es el primer paso hacia el mundo automotriz.',
        duracion: 75,
        tipo: 'presencial',
        costo: 15000.00,
        fecha_inicio: '2025-06-10',
        fecha_fin: '2025-08-24',
        foto: '/uploads/mecanica.png'
      },
      {
        id_curso: 5,
        nombre_curso: 'Oratoria',
        descripcion: 'Mejora tus habilidades de comunicación y aprende a expresarse de manera efectiva frente a cualquier tipo de audiencia. A lo largo de este curso, desarrollarás herramientas y técnicas para hablar con claridad, seguridad y persuasión, ya sea en presentaciones profesionales, exposiciones académicas o situaciones cotidianas donde se requiere hablar en público.',
        duracion: 30,
        tipo: 'a distancia',
        costo: 20000.00,
        fecha_inicio: '2025-05-20',
        fecha_fin: '2025-06-19',
        foto: '/uploads/oratoria.png'
      },
      {
        id_curso: 6,
        nombre_curso: 'Pintura',
        descripcion: 'Dirigido a todas las personas que deseen iniciarse en el arte de pintar o perfeccionar sus habilidades artísticas. A través de un enfoque práctico y dinámico, aprenderás a expresarte mediante el color, la forma y la técnica, explorando distintos estilos y materiales. Durante el curso, desarrollarás tu creatividad, conocerás las bases del dibujo, el manejo del color y las técnicas esenciales para trabajar con acrílicos, óleos y acuarelas, adaptándote a tu propio estilo personal.',
        duracion: 40,
        tipo: 'presencial',
        costo: 20000.00,
        fecha_inicio: '2025-07-01',
        fecha_fin: '2025-08-10',
        foto: '/uploads/pintura.png'
      },
      {
        id_curso: 7,
        nombre_curso: 'Administración',
        descripcion: 'Ofrece una formación práctica y actualizada para quienes buscan adquirir o perfeccionar habilidades en la gestión de organizaciones. Aprenderás a planificar, organizar, dirigir y controlar recursos de manera eficiente, desarrollando una visión estratégica que te permita liderar proyectos, empresas o emprendimientos exitosamente. Ideal para quienes desean fortalecer su perfil profesional, emprender o mejorar la gestión de sus negocios.',
        duracion: 60,
        tipo: 'a distancia',
        costo: 18000.00,
        fecha_inicio: '2025-05-10',
        fecha_fin: '2025-07-10',
        foto: '/uploads/administracion.png'
      },
      {
        id_curso: 8,
        nombre_curso: 'Caligrafía',
        descripcion: 'Para introducirte en el mundo de la escritura artística, combinando técnica y creatividad. Aprenderás a dominar distintos estilos caligráficos, mejorar tu trazo, desarrollar precisión y expresar tu estilo personal a través de la letra escrita. Es ideal tanto para principiantes como para quienes buscan perfeccionar su técnica en proyectos creativos, diseño, invitaciones, arte y más.',
        duracion: 20,
        tipo: 'a distancia',
        costo: 12000.00,
        fecha_inicio: '2025-06-05',
        fecha_fin: '2025-06-25',
        foto: '/uploads/caligrafia.png'
      },
      {
        id_curso: 9,
        nombre_curso: 'Manicuría',
        descripcion: 'Te formarás en las técnicas esenciales para el cuidado y embellecimiento de manos y uñas. Aprenderás desde los conceptos básicos de higiene y preparación hasta las últimas tendencias en esmaltado, decoración y tratamientos de spa para manos. Ideal para quienes desean iniciar su propio emprendimiento o perfeccionar sus habilidades en el mundo de la estética.',
        duracion: 50,
        tipo: 'presencial',
        costo: 15000.00,
        fecha_inicio: '2025-05-22',
        fecha_fin: '2025-07-11',
        foto: '/uploads/manicuria.png'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cursos', null, {});
  }
};
