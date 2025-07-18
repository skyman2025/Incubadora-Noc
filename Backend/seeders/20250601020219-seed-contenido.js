'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contenido', [
      // Módulo 1
      {
        id_curso: 1,
        modulo: 'Módulo 1',
        nombre: 'Introducción a la Carpintería',
        tipo: 'pdf',
        url: 'https://drive.google.com/file/d/1OYXlVefwlUizHSOjxm2Coyw1nnlQhs3h/view?usp=drive_link',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 2,
        modulo: 'Módulo 1',
        nombre: 'Fundamentos del Diseño Gráfico',
        tipo: 'canva',
        url: 'https://drive.google.com/file/d/1xi2oLpjmdQwoHdx1hTL6ZzY0dj2rxKdW/view?usp=sharing',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 3,
        modulo: 'Módulo 1',
        nombre: 'Conceptos básicos de Informática',
        tipo: 'docx',
        url: 'https://drive.google.com/file/d/1vyJlJvH-xC8sprCISh-WXyWxcxXvx5fK/view?usp=sharing',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 4,
        modulo: 'Módulo 1',
        nombre: 'Motores y su funcionamiento',
        tipo: 'mp4',
        url: 'https://drive.google.com/file/d/1CF9RbP2jCIuALM1ykiIxiicfiRcUOp61/view?usp=sharing',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 5,
        modulo: 'Módulo 1',
        nombre: 'Primeros pasos en Oratoria',
        tipo: 'pptx',
        url: 'https://drive.google.com/file/d/19uL2K1icCVFMgrA_eTNZfYWdYoCjBaci/view?usp=sharing',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 6,
        modulo: 'Módulo 1',
        nombre: 'Introducción al color y forma',
        tipo: 'jpg',
        url: 'https://drive.google.com/file/d/1RfT_w-51YR0NiR-Jl9K5o3-wpNqYKseY/view?usp=sharing',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 7,
        modulo: 'Módulo 1',
        nombre: 'Qué es la Administración',
        tipo: 'pdf',
        url: 'https://drive.google.com/file/d/1SJANBMmt8If_5aVeXsOey21X-zZx4iVo/view?usp=drive_link',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 8,
        modulo: 'Módulo 1',
        nombre: 'Trazos básicos en caligrafía',
        tipo: 'svg',
        url: 'https://drive.google.com/file/d/1CTinubykjIqtwmEDFfuCjkP6iEC21MGW/view?usp=drive_link',
        fecha_publicacion: '2025-06-01'
      },
      {
        id_curso: 9,
        modulo: 'Módulo 1',
        nombre: 'Cuidados esenciales para uñas',
        tipo: 'mp4',
        url: 'https://drive.google.com/file/d/1OK3YAssf0jp_-cQCYkLdkJH8W023s7sU/view?usp=drive_link',
        fecha_publicacion: '2025-06-01'
      },

      // Módulo 2
      {
        id_curso: 1,
        modulo: 'Módulo 2',
        nombre: 'Herramientas Manuales y Seguridad',
        tipo: 'pdf',
        url: 'https://drive.google.com/file/d/1OYXlVefwlUizHSOjxm2Coyw1nnlQhs3h/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 2,
        modulo: 'Módulo 2',
        nombre: 'Diseño para medios digitales',
        tipo: 'canva',
        url: 'https://drive.google.com/file/d/1xi2oLpjmdQwoHdx1hTL6ZzY0dj2rxKdW/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 3,
        modulo: 'Módulo 2',
        nombre: 'Procesadores de texto',
        tipo: 'docx',
        url: 'https://drive.google.com/file/d/1QweI-zJAP0A3C6YldW60U99i322Qe0k4/view?usp=sharing',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 4,
        modulo: 'Módulo 2',
        nombre: 'Sistema de Frenos',
        tipo: 'mp4',
        url: 'https://drive.google.com/file/d/1CF9RbP2jCIuALM1ykiIxiicfiRcUOp61/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 5,
        modulo: 'Módulo 2',
        nombre: 'Control del lenguaje corporal',
        tipo: 'pptx',
        url: 'https://drive.google.com/file/d/19uL2K1icCVFMgrA_eTNZfYWdYoCjBaci/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 6,
        modulo: 'Módulo 2',
        nombre: 'Técnicas con acrílico',
        tipo: 'jpg',
        url: 'https://drive.google.com/file/d/1RfT_w-51YR0NiR-Jl9K5o3-wpNqYKseY/view?usp=sharing',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 7,
        modulo: 'Módulo 2',
        nombre: 'Planificación estratégica',
        tipo: 'pdf',
        url: 'https://drive.google.com/file/d/1SJANBMmt8If_5aVeXsOey21X-zZx4iVo/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 8,
        modulo: 'Módulo 2',
        nombre: 'Estilos modernos de caligrafía',
        tipo: 'svg',
        url: 'https://drive.google.com/file/d/1CTinubykjIqtwmEDFfuCjkP6iEC21MGW/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      },
      {
        id_curso: 9,
        modulo: 'Módulo 2',
        nombre: 'Esmaltado semipermanente',
        tipo: 'mp4',
        url: 'https://drive.google.com/file/d/1OK3YAssf0jp_-cQCYkLdkJH8W023s7sU/view?usp=drive_link',
        fecha_publicacion: '2025-06-08'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contenido', {
      modulo: {
        [Sequelize.Op.in]: ['Módulo 1', 'Módulo 2']
      }
    }, {});
  }
};
