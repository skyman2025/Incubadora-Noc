const Pagos = require("../models/pagos");
const { validationResult } = require('express-validator');
const Stripe = require('stripe');
//const stripe = Stripe('sk_test_...'); 
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const { Op } = require("sequelize");

const cargaPago = async (req,res,next) => {
    console.log('datos:', req.body);
    const { id_usuario, id_curso, monto, fecha_pago } = req.body;

    if (!id_usuario || !id_curso || !fecha_pago || !monto) {
    return res.status(400).json({ error: 'Faltan datos requeridos.' });
    }
    try{
      const pagoNuevo = await Pagos.create({
      id_usuario,
      id_curso,
      monto,
      fecha_pago
    });
      res.status(201).json({
      message: 'Pago registrada exitosamente.',
      id_pago: pagoNuevo.id_usuario
    });
    } catch (error) {
     console.error('Error al Pago', error);
     res.status(500).json({ error: 'Error al registrar la inscripción.' });
  }
}

// recupera todos los pagos
const getAllpagos = async (req, res, next) => {
  try {
    const { id_usuario, id_curso, fecha_pago } = req.query;

    const where = {};

    if (id_usuario) where.id_usuario = id_usuario;
    if (id_curso) where.id_curso = id_curso;
    if (fecha_pago) where.fecha_pago = fecha_pago;

    const pagos = await Pagos.findAll({ where });

    res.status(200).json(pagos);
  } catch (error) {
    console.error("Error al obtener pagos:", error);
    res.status(500).json({ error: "Error al obtener pagos" });
  }
};

// recupera un solo pago por el id
const getSinglePago = async (req, res, next) => {
    
    try {
        const pagoId = req.params.id_usuario; 
        if (!Number.isInteger(Number(pagoId))) {
            return res.status(400).json({ error: "Usa un ID válido para encontrar la informacion de pago del Usuario" });
        }
        const pago = await Pagos.findOne({ where: { id_usuario: pagoId} });

        if (!pago) {
            return res.status(404).json({ error: "Pago de Usuario no encontrado" });
        }

        res.status(200).json(pago);
    } catch (error) {
        res.status(500).json({ error: "Hubo un error tratando de encontrar informacion de pago del Usuario", error });
    }
};

const stripeIntent = async (req, res, next) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
  return res.status(400).json({ error: 'El monto debe ser un número válido mayor que cero.' });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // en centavos: 1000 = $10.00
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error al crear PaymentIntent:', error);
    res.status(500).send({ error: error.message });
  }
};

const obtenerTotalPagos = async (req, res) => {
  try {
    const result = await Pagos.sum('monto');
    res.json({ total: parseFloat(result) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al calcular el total de pagos' });
  }
};



module.exports = 
{
    cargaPago,
    getAllpagos,
    getSinglePago,
    stripeIntent
}
