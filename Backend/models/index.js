
const usuarios = require('./user');
const cursos = require('./cursos');
const inscripcion = require('./inscripciones');
const docentecurso = require('./docentecurso');

  inscripcion.belongsTo(cursos, {
    foreignKey: 'id_curso',
    as: 'curso'
  });

  cursos.hasMany(inscripcion, {
     foreignKey: 'id_curso',
     as: 'inscripciones'
  });
//particiantes
  usuarios.hasMany(inscripcion, {
    foreignKey: 'id_usuario',
    as: 'inscripciones'
  });

  inscripcion.belongsTo(usuarios, {
    foreignKey: 'id_usuario',
    as: 'usuario'
  });

//Cada usuario puede estar relacionado con muchos cursos, a través de la tabla docentecurso
  usuarios.belongsToMany(cursos, {
    through: docentecurso,
    foreignKey: 'id_usuario',
    otherKey: 'id_curso',
    as: 'cursosAsignados'
  });
//Cada curso puede estar asignado a muchos usuarios, a través de la tabla docentecurso
  cursos.belongsToMany(usuarios, {
    through: docentecurso,
    foreignKey: 'id_curso',
    otherKey: 'id_usuario',
    as: 'docentes'
  });

module.exports = {
  usuarios,
  cursos,
  inscripcion,
  docentecurso
};