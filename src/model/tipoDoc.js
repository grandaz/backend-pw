import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const TipoDoc = sequelize.define('tipoDoc', {
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

export default TipoDoc