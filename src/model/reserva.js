import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Usuario from './usuario.js'
import Libro from './libro.js'

const Reserva = sequelize.define('reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER
    },
    idLibro: {
        type: DataTypes.INTEGER
    },
    fechaReserva: {
        type: DataTypes.DATE,
    },
    fechaDevolucion: {
        type: DataTypes.DATE,
    },
    estado: {
        type: DataTypes.CHAR(1),
    }
})

Reserva.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'id'
})

Reserva.belongsTo(Libro, {
    foreignKey: 'idLibro',
    targetId: 'id'
})

export default Reserva;