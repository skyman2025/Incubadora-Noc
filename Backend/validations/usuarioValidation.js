
const { body, param } = require('express-validator');

const validateCreateUsuario = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('dni').isInt().withMessage('DNI inválido'),
];

const validateUpdateUsuario = [
  param('id').isInt().withMessage('El ID debe ser numérico'),
  body('email').optional().isEmail().withMessage('Email inválido'),
  body('nombre').optional().isLength({ min: 2 }).withMessage('Nombre muy corto')
];

const validateDeleteUsuario = [
  param('id')
    .isInt({ gt: 0 }).withMessage('El ID debe ser un número entero positivo'),
];

const userLoginValidations = [
  body('email')
    .notEmpty().withMessage('El email es obligatorio.')
    .isEmail().withMessage('El email no es válido.')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
];

module.exports = {
  validateCreateUsuario,
  validateUpdateUsuario,
  validateDeleteUsuario,
  userLoginValidations
};
