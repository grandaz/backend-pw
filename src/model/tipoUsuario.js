import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const TipoUsuario = sequelize.define('tipoUsuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(250)
    }
})

export default TipoUsuario