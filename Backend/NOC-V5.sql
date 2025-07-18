-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 11-06-2025 a las 03:42:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `NOC-V5`
--
CREATE DATABASE IF NOT EXISTS `NOC-V5` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `NOC-V5`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Asistencia`
--

CREATE TABLE `Asistencia` (
  `id_asistencia` int(11) NOT NULL,
  `id_inscripcion` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `estado` enum('presente','ausente','justificado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CondicionesAprobacion`
--

CREATE TABLE `CondicionesAprobacion` (
  `id_condicion` int(11) NOT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `asistencia_minima` int(11) DEFAULT NULL,
  `nota_minima` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Contenido`
--

CREATE TABLE `Contenido` (
  `id_contenido` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `modulo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` enum('pdf','docx','odt','txt','xlsx','ods','pptx','odp','mp4','webm','avi','mp3','wav','jpg','jpeg','png','gif','svg','genially','canva','iframe','url') NOT NULL,
  `url` varchar(255) NOT NULL,
  `fecha_publicacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Contenido`
--

INSERT INTO `Contenido` (`id_contenido`, `id_curso`, `modulo`, `nombre`, `tipo`, `url`, `fecha_publicacion`) VALUES
(1, 1, 'Módulo 1', 'Introducción a la Carpintería', 'pdf', 'https://drive.google.com/file/d/1OYXlVefwlUizHSOjxm2Coyw1nnlQhs3h/view?usp=drive_link', '2025-06-01'),
(2, 2, 'Módulo 1', 'Fundamentos del Diseño Gráfico', 'canva', 'https://drive.google.com/file/d/1xi2oLpjmdQwoHdx1hTL6ZzY0dj2rxKdW/view?usp=sharing', '2025-06-01'),
(3, 3, 'Módulo 1', 'Conceptos básicos de Informática', 'docx', 'https://drive.google.com/file/d/1vyJlJvH-xC8sprCISh-WXyWxcxXvx5fK/view?usp=sharing', '2025-06-01'),
(4, 4, 'Módulo 1', 'Motores y su funcionamiento', 'mp4', 'https://drive.google.com/file/d/1CF9RbP2jCIuALM1ykiIxiicfiRcUOp61/view?usp=sharing', '2025-06-01'),
(5, 5, 'Módulo 1', 'Primeros pasos en Oratoria', 'pptx', 'https://drive.google.com/file/d/19uL2K1icCVFMgrA_eTNZfYWdYoCjBaci/view?usp=sharing', '2025-06-01'),
(6, 6, 'Módulo 1', 'Introducción al color y forma', 'jpg', 'https://drive.google.com/file/d/1RfT_w-51YR0NiR-Jl9K5o3-wpNqYKseY/view?usp=sharing', '2025-06-01'),
(7, 7, 'Módulo 1', 'Qué es la Administración', 'pdf', 'https://drive.google.com/file/d/1SJANBMmt8If_5aVeXsOey21X-zZx4iVo/view?usp=drive_link', '2025-06-01'),
(8, 8, 'Módulo 1', 'Trazos básicos en caligrafía', 'svg', 'https://drive.google.com/file/d/1CTinubykjIqtwmEDFfuCjkP6iEC21MGW/view?usp=drive_link', '2025-06-01'),
(9, 9, 'Módulo 1', 'Cuidados esenciales para uñas', 'mp4', 'https://drive.google.com/file/d/1OK3YAssf0jp_-cQCYkLdkJH8W023s7sU/view?usp=drive_link', '2025-06-01'),
(10, 1, 'Módulo 2', 'Herramientas Manuales y Seguridad', 'pdf', 'https://drive.google.com/file/d/1OYXlVefwlUizHSOjxm2Coyw1nnlQhs3h/view?usp=drive_link', '2025-06-08'),
(11, 2, 'Módulo 2', 'Diseño para medios digitales', 'canva', 'https://drive.google.com/file/d/1xi2oLpjmdQwoHdx1hTL6ZzY0dj2rxKdW/view?usp=drive_link', '2025-06-08'),
(12, 3, 'Módulo 2', 'Procesadores de texto', 'docx', 'https://drive.google.com/file/d/1QweI-zJAP0A3C6YldW60U99i322Qe0k4/view?usp=sharing', '2025-06-08'),
(13, 4, 'Módulo 2', 'Sistema de Frenos', 'mp4', 'https://drive.google.com/file/d/1CF9RbP2jCIuALM1ykiIxiicfiRcUOp61/view?usp=drive_link', '2025-06-08'),
(14, 5, 'Módulo 2', 'Control del lenguaje corporal', 'pptx', 'https://drive.google.com/file/d/19uL2K1icCVFMgrA_eTNZfYWdYoCjBaci/view?usp=drive_link', '2025-06-08'),
(15, 6, 'Módulo 2', 'Técnicas con acrílico', 'jpg', 'https://drive.google.com/file/d/1RfT_w-51YR0NiR-Jl9K5o3-wpNqYKseY/view?usp=sharing', '2025-06-08'),
(16, 7, 'Módulo 2', 'Planificación estratégica', 'pdf', 'https://drive.google.com/file/d/1SJANBMmt8If_5aVeXsOey21X-zZx4iVo/view?usp=drive_link', '2025-06-08'),
(17, 8, 'Módulo 2', 'Estilos modernos de caligrafía', 'svg', 'https://drive.google.com/file/d/1CTinubykjIqtwmEDFfuCjkP6iEC21MGW/view?usp=drive_link', '2025-06-08'),
(18, 9, 'Módulo 2', 'Esmaltado semipermanente', 'mp4', 'https://drive.google.com/file/d/1OK3YAssf0jp_-cQCYkLdkJH8W023s7sU/view?usp=drive_link', '2025-06-08'),
(20, 3, 'Módulo 1', 'Html completo', 'url', 'https://youtu.be/ELSm-G201Ls?si=5Z3Z1js7_z8AaEsk', '2025-06-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CursoCredito`
--

CREATE TABLE `CursoCredito` (
  `id_curso` int(11) NOT NULL,
  `id_programa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cursos`
--

CREATE TABLE `Cursos` (
  `id_curso` int(11) NOT NULL,
  `nombre_curso` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `tipo` enum('presencial','a distancia') DEFAULT NULL,
  `costo` decimal(10,2) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `foto` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Cursos`
--

INSERT INTO `Cursos` (`id_curso`, `nombre_curso`, `descripcion`, `duracion`, `tipo`, `costo`, `fecha_inicio`, `fecha_fin`, `foto`) VALUES
(1, 'Carpintería', 'Este curso de carpintería está diseñado para enseñar desde lo básico hasta lo avanzado. Aprende a manejar las herramientas y técnicas más importantes para crear proyectos de carpintería con precisión y seguridad.', 60, 'presencial', 3000.00, '2025-05-06', '2025-07-06', '/uploads/carpinteria.png'),
(2, 'Diseño', 'Para aquellos interesados en desarrollar habilidades en la creación y desarrollo de proyectos visuales impactantes. Aprenderás las herramientas y técnicas esenciales para diseñar piezas gráficas para una amplia gama de medios, desde impresos hasta digitales.', 45, 'presencial', 8000.00, '2025-06-01', '2025-07-15', '/uploads/diseno.png'),
(3, 'Informática', 'Dirigido a personas que desean aprender a utilizar las herramientas informáticas esenciales para la vida diaria, el trabajo y la educación. A través de este curso, adquirirás conocimientos fundamentales sobre el uso de la computadora, programas de oficina y navegación en internet, lo que te permitirá desenvolverte con confianza en un mundo digital.', 90, 'a distancia', 9000.00, '2025-05-15', '2025-08-15', '/uploads/informatica.png'),
(4, 'Mecánica', 'Principios fundamentales de la reparación y mantenimiento de vehículos. Este curso te proporcionará las herramientas y conocimientos esenciales para entender el funcionamiento de los motores, los sistemas de transmisión, frenos, suspensión, y mucho más. Ya sea que busques aprender para uso personal o como base para una carrera en la mecánica, este curso es el primer paso hacia el mundo automotriz.', 75, 'presencial', 15000.00, '2025-06-10', '2025-08-24', '/uploads/mecanica.png'),
(5, 'Oratoria', 'Mejora tus habilidades de comunicación y aprende a expresarse de manera efectiva frente a cualquier tipo de audiencia. A lo largo de este curso, desarrollarás herramientas y técnicas para hablar con claridad, seguridad y persuasión, ya sea en presentaciones profesionales, exposiciones académicas o situaciones cotidianas donde se requiere hablar en público.', 30, 'a distancia', 20000.00, '2025-05-20', '2025-06-19', '/uploads/oratoria.png'),
(6, 'Pintura', 'Dirigido a todas las personas que deseen iniciarse en el arte de pintar o perfeccionar sus habilidades artísticas. A través de un enfoque práctico y dinámico, aprenderás a expresarte mediante el color, la forma y la técnica, explorando distintos estilos y materiales. Durante el curso, desarrollarás tu creatividad, conocerás las bases del dibujo, el manejo del color y las técnicas esenciales para trabajar con acrílicos, óleos y acuarelas, adaptándote a tu propio estilo personal.', 40, 'presencial', 20000.00, '2025-07-01', '2025-08-10', '/uploads/pintura.png'),
(7, 'Administración', 'Ofrece una formación práctica y actualizada para quienes buscan adquirir o perfeccionar habilidades en la gestión de organizaciones. Aprenderás a planificar, organizar, dirigir y controlar recursos de manera eficiente, desarrollando una visión estratégica que te permita liderar proyectos, empresas o emprendimientos exitosamente. Ideal para quienes desean fortalecer su perfil profesional, emprender o mejorar la gestión de sus negocios.', 60, 'a distancia', 18000.00, '2025-05-10', '2025-07-10', '/uploads/administracion.png'),
(8, 'Caligrafía', 'Para introducirte en el mundo de la escritura artística, combinando técnica y creatividad. Aprenderás a dominar distintos estilos caligráficos, mejorar tu trazo, desarrollar precisión y expresar tu estilo personal a través de la letra escrita. Es ideal tanto para principiantes como para quienes buscan perfeccionar su técnica en proyectos creativos, diseño, invitaciones, arte y más.', 20, 'a distancia', 12000.00, '2025-06-05', '2025-06-25', '/uploads/caligrafia.png'),
(9, 'Manicuría', 'Te formarás en las técnicas esenciales para el cuidado y embellecimiento de manos y uñas. Aprenderás desde los conceptos básicos de higiene y preparación hasta las últimas tendencias en esmaltado, decoración y tratamientos de spa para manos. Ideal para quienes desean iniciar su propio emprendimiento o perfeccionar sus habilidades en el mundo de la estética.', 50, 'presencial', 15000.00, '2025-05-22', '2025-07-11', '/uploads/manicuria.png'),
(10, 'Ingles', 'Aprende Ingles a tu ritmo -A1', 2, 'a distancia', 3000.00, '2025-06-10', '2025-08-10', '/uploads/Ingles_1749135162645.jpg'),
(11, 'Base  Datos 1', 'Aprende a tu ritmo bases de datos relacionales Introduccion', 2, 'a distancia', 4000.00, '2025-06-10', '2025-08-10', '/uploads/Base  Datos 1_1749135745021.jpeg'),
(12, 'Ingles-2', 'Aprende este idioma en el nivel intermedio B1 a tu ritmo ', 2, 'a distancia', 5000.00, '2025-06-10', '2025-08-10', '/uploads/Ingles-2_1749136702979.jpg'),
(13, 'Base Datos 2', 'Bases de datos relacionales querys, vistas y procedimientos nivel intermedio ,mediante sql', 2, 'a distancia', 6000.00, '2025-06-10', '2025-08-10', '/uploads/Base Datos 2_1749136818999.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `DocenteCurso`
--

CREATE TABLE `DocenteCurso` (
  `id_usuario` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `DocenteCurso`
--

INSERT INTO `DocenteCurso` (`id_usuario`, `id_curso`) VALUES
(1, 10),
(1, 11),
(2, 12),
(2, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Empresas`
--

CREATE TABLE `Empresas` (
  `id_empresa` int(11) NOT NULL,
  `nombre_empresa` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `contacto_nombre` varchar(100) DEFAULT NULL,
  `contacto_email` varchar(100) DEFAULT NULL,
  `contacto_telefono` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Empresas`
--

INSERT INTO `Empresas` (`id_empresa`, `nombre_empresa`, `descripcion`, `contacto_nombre`, `contacto_email`, `contacto_telefono`) VALUES
(1, 'Santex Technologies', 'Empresa global que ofrece soluciones de desarrollo de software a medida y consultoría en IT, con experiencia en empresas multinacionales.', 'Luis Martínez', 'luis.martinez@santexgroup.com', '1166789012'),
(2, 'Xacademy Partners', 'Plataforma educativa dedicada a la formación de desarrolladores, con programas intensivos en tecnología y metodologías ágiles.', 'Ana Gómez', 'ana.gomez@xacademy.com', '1167890123'),
(3, 'DevSolutions', 'Proveedor de soluciones tecnológicas a medida, especializados en desarrollo de aplicaciones para empresas de diferentes sectores.', 'Carlos Rodríguez', 'carlos.rodriguez@devsolutions.com', '1168901234'),
(4, 'TechLabs', 'Red de incubadoras de startups en el ámbito tecnológico, impulsando el crecimiento de nuevas empresas en el sector digital y software.', 'Javier Pérez', 'javier.perez@techlabs.com', '1169012345'),
(5, 'Innovative IT', 'Consultoría en transformación digital y desarrollo de plataformas tecnológicas para mejorar la eficiencia empresarial.', 'Laura Martínez', 'laura.martinez@innovativeit.com', '1169123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `EntrenamientosLaborales`
--

CREATE TABLE `EntrenamientosLaborales` (
  `id_entrenamiento` int(11) NOT NULL,
  `nombre_entrenamiento` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Inscripciones`
--

CREATE TABLE `Inscripciones` (
  `id_inscripcion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `fecha_inscripcion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Inscripciones`
--

INSERT INTO `Inscripciones` (`id_inscripcion`, `id_usuario`, `id_curso`, `fecha_inscripcion`) VALUES
(1, 3, 10, '2025-06-05'),
(2, 3, 7, '2025-06-05'),
(3, 2, 3, '2025-06-05'),
(4, 4, 12, '2025-06-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `client_offset` varchar(255) DEFAULT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `client_offset`, `content`, `createdAt`, `updatedAt`) VALUES
(1, '8yutvjzkU8444QSuAAAT-1749137160015', 'hola', '2025-06-05 15:26:00', '2025-06-05 15:26:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pagos`
--

CREATE TABLE `Pagos` (
  `id_pago` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `fecha_pago` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Pagos`
--

INSERT INTO `Pagos` (`id_pago`, `id_usuario`, `id_curso`, `monto`, `fecha_pago`) VALUES
(1, 3, 10, 3000.00, '2025-02-05'),
(2, 3, 7, 18000.00, '2025-03-05'),
(3, 2, 3, 9000.00, '2025-04-05'),
(4, 4, 12, 5000.00, '2025-05-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ProgramasCredito`
--

CREATE TABLE `ProgramasCredito` (
  `id_programa` int(11) NOT NULL,
  `nombre_programa` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `tasa_interes` decimal(5,2) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `requisitos` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Publicaciones`
--

CREATE TABLE `Publicaciones` (
  `id_publicacion` int(11) NOT NULL,
  `titulo` varchar(200) DEFAULT NULL,
  `contenido` text DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `tipo` enum('curso','capacitacion','entrenamiento') DEFAULT NULL,
  `estado` enum('activo','inactivo') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Publicaciones`
--

INSERT INTO `Publicaciones` (`id_publicacion`, `titulo`, `contenido`, `fecha_publicacion`, `tipo`, `estado`) VALUES
(1, 'Curso de Node.js con Sequelize', 'Aprende a desarrollar APIs REST con Node y Sequelize.', '2025-05-01', 'curso', 'activo'),
(2, 'Capacitación en Angular', 'Frontend avanzado con Angular y consumo de APIs.', '2025-05-02', 'capacitacion', 'activo'),
(3, 'Entrenamiento Fullstack', 'Entrenamiento intensivo para desarrolladores fullstack.', '2025-05-03', 'entrenamiento', 'inactivo'),
(4, 'Curso de MySQL Avanzado', 'Profundiza en consultas complejas y optimización.', '2025-05-04', 'curso', 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20250522010000-create-usuarios.js'),
('20250522020000-create-cursos.js'),
('20250522183858-create-publicaciones.js'),
('20250522185006-create-empresas.js'),
('20250522185755-create-docentecurso.js'),
('20250523000205-create-entrenamientos-laborales.js'),
('20250523003756-create-programas-credito.js'),
('20250523004221-create-curso-credito.js'),
('20250523004706-create-contenido.js'),
('20250523010620-create-condiciones-aprobacion.js'),
('20250529975711-create-inscripciones-table.js'),
('20250529981308-create-asistencias-table.js'),
('20250529990000-create-pagos.js'),
('20250603132028-tabla-mensajes.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  `dni` int(11) NOT NULL,
  `especialidad` varchar(100) DEFAULT NULL,
  `tipo_usuario` enum('alumno','docente','admin') NOT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`id_usuario`, `nombre`, `apellido`, `fecha_nacimiento`, `direccion`, `telefono`, `email`, `password`, `dni`, `especialidad`, `tipo_usuario`, `foto`) VALUES
(1, 'Admin', 'Principal', '1990-01-01', 'Base', 123456789, 'adminroot@gmail.com', '$2b$10$67eURX8SNn0kea6q/0V9DuN3g1ALC8O5bF/XCQn2bz4igYZaXrvou', 12345678, 'Administrador del sistema', 'admin', '/uploads/12345678-admin.png'),
(2, 'Carlos', 'Ramírez', '2000-04-15', 'Av. Siempre Viva 77', 123456789, 'carlosRamirez@gmail.com', '$2b$10$/4zdYAyBPE/cPlS3fHuFdOV4EehR/x/dFkcu3FOlN8ODBWnm3E0w2', 42225678, 'Matemáticas', 'docente', '/uploads/profesor2.png'),
(3, 'Laura', 'González', '1995-08-25', 'Sprinfield 654', 987654321, 'lauraGonzalez@gmail.com', '$2b$10$769EAlzhqcV8KJlUKrN4KepKEUkUpNch1UvyhG8ATedSv2/R34w0q', 38226543, NULL, 'alumno', '/uploads/laura.jpg'),
(4, 'Juan ', 'Luna', '1992-07-16', 'Villa Maria 231', 344562896, 'juan26@gmail.com', '$2b$10$pa0ZsleoVjgIKTunUllI.uJt/e.FiDo/q0s6JesiC4rh82JzIHORy', 39536248, '', 'alumno', '/uploads/39536248_1749137525339.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Asistencia`
--
ALTER TABLE `Asistencia`
  ADD PRIMARY KEY (`id_asistencia`),
  ADD KEY `id_inscripcion` (`id_inscripcion`);

--
-- Indices de la tabla `CondicionesAprobacion`
--
ALTER TABLE `CondicionesAprobacion`
  ADD PRIMARY KEY (`id_condicion`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `Contenido`
--
ALTER TABLE `Contenido`
  ADD PRIMARY KEY (`id_contenido`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `CursoCredito`
--
ALTER TABLE `CursoCredito`
  ADD PRIMARY KEY (`id_curso`,`id_programa`),
  ADD KEY `id_programa` (`id_programa`);

--
-- Indices de la tabla `Cursos`
--
ALTER TABLE `Cursos`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `DocenteCurso`
--
ALTER TABLE `DocenteCurso`
  ADD PRIMARY KEY (`id_usuario`,`id_curso`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `Empresas`
--
ALTER TABLE `Empresas`
  ADD PRIMARY KEY (`id_empresa`);

--
-- Indices de la tabla `EntrenamientosLaborales`
--
ALTER TABLE `EntrenamientosLaborales`
  ADD PRIMARY KEY (`id_entrenamiento`),
  ADD KEY `empresa_id` (`empresa_id`);

--
-- Indices de la tabla `Inscripciones`
--
ALTER TABLE `Inscripciones`
  ADD PRIMARY KEY (`id_inscripcion`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Pagos`
--
ALTER TABLE `Pagos`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Indices de la tabla `ProgramasCredito`
--
ALTER TABLE `ProgramasCredito`
  ADD PRIMARY KEY (`id_programa`);

--
-- Indices de la tabla `Publicaciones`
--
ALTER TABLE `Publicaciones`
  ADD PRIMARY KEY (`id_publicacion`);

--
-- Indices de la tabla `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Asistencia`
--
ALTER TABLE `Asistencia`
  MODIFY `id_asistencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `CondicionesAprobacion`
--
ALTER TABLE `CondicionesAprobacion`
  MODIFY `id_condicion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Contenido`
--
ALTER TABLE `Contenido`
  MODIFY `id_contenido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `Cursos`
--
ALTER TABLE `Cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `Empresas`
--
ALTER TABLE `Empresas`
  MODIFY `id_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `EntrenamientosLaborales`
--
ALTER TABLE `EntrenamientosLaborales`
  MODIFY `id_entrenamiento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Inscripciones`
--
ALTER TABLE `Inscripciones`
  MODIFY `id_inscripcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Pagos`
--
ALTER TABLE `Pagos`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ProgramasCredito`
--
ALTER TABLE `ProgramasCredito`
  MODIFY `id_programa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Publicaciones`
--
ALTER TABLE `Publicaciones`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Asistencia`
--
ALTER TABLE `Asistencia`
  ADD CONSTRAINT `Asistencia_ibfk_1` FOREIGN KEY (`id_inscripcion`) REFERENCES `Inscripciones` (`id_inscripcion`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `CondicionesAprobacion`
--
ALTER TABLE `CondicionesAprobacion`
  ADD CONSTRAINT `CondicionesAprobacion_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `Cursos` (`id_curso`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `Contenido`
--
ALTER TABLE `Contenido`
  ADD CONSTRAINT `Contenido_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `Cursos` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `CursoCredito`
--
ALTER TABLE `CursoCredito`
  ADD CONSTRAINT `CursoCredito_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `Cursos` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CursoCredito_ibfk_2` FOREIGN KEY (`id_programa`) REFERENCES `ProgramasCredito` (`id_programa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `DocenteCurso`
--
ALTER TABLE `DocenteCurso`
  ADD CONSTRAINT `DocenteCurso_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DocenteCurso_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `Cursos` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `EntrenamientosLaborales`
--
ALTER TABLE `EntrenamientosLaborales`
  ADD CONSTRAINT `EntrenamientosLaborales_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `Empresas` (`id_empresa`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `Inscripciones`
--
ALTER TABLE `Inscripciones`
  ADD CONSTRAINT `Inscripciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Inscripciones_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `Cursos` (`id_curso`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `Pagos`
--
ALTER TABLE `Pagos`
  ADD CONSTRAINT `Pagos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Pagos_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `Cursos` (`id_curso`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
