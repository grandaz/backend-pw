import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

import TipoDoc from './tipoDoc.js'
import TipoUsuario from './tipoUsuario.js'

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING(250)
    },
    apellidos: {
        type: DataTypes.STRING(250)
    },
    fotoUrl: {
        type: DataTypes.TEXT
    },
    tipoUsuario: {
        type: DataTypes.STRING(30)
    },
    idTipoDoc: {
        type: DataTypes.STRING(5)
    },
    nroDoc: {
        type: DataTypes.STRING(10)
    },
    correo: {
        type: DataTypes.STRING(45)
    },
    contrasena: {
        type: DataTypes.STRING(100)
    }
})

Usuario.belongsTO(TipoDoc, {
    foreignKey: 'idTipoDOc',
    targetId: 'id'
})

Usuario.belongsTO(TipoUsuario, {
    foreignKey: 'idTipoUsuario',
    targetId: 'id'
})

export default Usuario