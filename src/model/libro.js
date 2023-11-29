import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
    imagenPortadaUrl: {
        type: DataTypes.STRING(250)
    },
    vecesReservado: {
        type: DataTypes.INTEGER
    },
    available: {
        type: DataTypes.BOOLEAN
    }
})

export default Libro;