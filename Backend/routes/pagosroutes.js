const express =require('express');
const router = express.Router();
const pagos = require('../controllers/pagoscontrollers')

const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const verificarToken = require('../middleware/verificarToken');

router.post('/create-payment-intent',pagos.stripeIntent)
router.post('/',pagos.cargaPago)
router.get('/', pagos.getAllpagos);

//router.get('/:id_usuario',verificarToken, pagos.getSinglePago)

router.get('/:id_usuario', pagos.getSinglePago)


module.exports = router;
