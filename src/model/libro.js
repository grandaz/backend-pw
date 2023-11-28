import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Reserva from './reserva.js'

const Libro = sequelize.define('libro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(250)
    },
    autor: {
        type: DataTypes.STRING(250)
    },
    serie: {
        type: DataTypes.STRING(250)
    },
    isbn13: {
        type: DataTypes.CHAR(13)
    },
    categorias: {
        type: DataTypes.STRING(250)
    },
    encuadernacion: {
        type: DataTypes.STRING(250)
    },
    imagenPotadaUrl: {
        type: DataTypes.STRING(250)
    },
    available: {
        type: DataTypes.BOOLEAN
    }
})

Libro.belongsTo(Reserva, {
    foreignKey: 'id',
    targetId: 'idLibro'
})

export default Reserva;