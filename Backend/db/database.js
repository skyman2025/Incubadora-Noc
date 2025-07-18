const { Sequelize } = require('sequelize');
require('dotenv').config();  

const sequelizeUsers = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false, // para desactiva el log 
});

module.exports = { sequelizeUsers };

