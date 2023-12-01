import RepositoryBase from "../repository/base.js";
import modelo from '../model/usuario.js'
import Usuario from "../model/usuario.js";

const repository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const lista = await repository.findAll();

    return res.status(200).json(lista);

}

const create = async (req,res) => {
    const result = await repository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await repository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await repository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await repository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    // Valida si existe el usuario con el correo proporcionado
    const usuario = await Usuario.findOne({ where: { correo } });

    if (!usuario) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado", data: null });
    }

    // Valida la contraseña
    if (contrasena !== usuario.contrasena) {
      return res.status(400).json({ success: false, message: "Contraseña incorrecta", data: null });
    }

    // Usuario logueado correctamente, devolver la información del usuario
    return res.status(200).json({
      success: true,
      message: "Usuario logueado correctamente",
      data: {
        id: usuario.id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        correo: usuario.correo,
        fotoUrl: usuario.fotoUrl,
        idTipoUsuario: usuario.idTipoUsuario,
        idTipoDoc: usuario.idTipoDoc,
        nroDoc: usuario.nroDoc,
        contrasena: usuario.contrasena,
        idioma: usuario.idioma,
        prefijo: usuario.prefijo,
        color: usuario.color
        // Agrega más campos según sea necesario
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Error al loguear el usuario", data: null });
  }
};

  
  
  



const controller = { findAll, create, findOne, update, remove, login}

export default controller;