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
    idTipoUsuario: {
        type: DataTypes.INTEGER
    },
    idTipoDoc: {
        type: DataTypes.INTEGER
    },
    nroDoc: {
        type: DataTypes.STRING(10)
    },
    correo: {
        type: DataTypes.STRING(45)
    },
    contrasena: {
        type: DataTypes.STRING(100)
    },
    idioma: {
        type: DataTypes.STRING(40)
    }
    ,
    prefijo: {
        type: DataTypes.STRING(40)
    }
    ,
    color: {
        type: DataTypes.STRING(40)
    }
})

Usuario.belongsTo(TipoDoc, {
    foreignKey: 'idTipoDoc',
    targetId: 'id'
})

Usuario.belongsTo(TipoUsuario, {
    foreignKey: 'idTipoUsuario',
    targetId: 'id'
})

export default Usuario