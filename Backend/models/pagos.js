const { DataTypes } = require('sequelize');
const { sequelizeUsers } = require('../db/database.js');

const Pagos = sequelizeUsers.define('pagos', {
    id_pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    fecha_pago: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    tableName: 'Pagos',
    timestamps: false
});

module.exports = Pagos;
