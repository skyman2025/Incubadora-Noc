const { join } = require('node:path');
const db = require('../models/chat')

const chat = (req ,res )=>{
 res.sendFile(join(__dirname , '..', 'index.html'))
}

const crearMensaje = async (content) => {
  try {
    const mensaje = await Mensajes.create({ content });
    return mensaje;
  } catch (error) {
    throw error;
  }
};



module.exports = {chat , crearMensaje}