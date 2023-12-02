import reservaRepository from '../repository/reserva.js'
import usuarioModel from '../model/usuario.js'
import libroModel from '../model/libro.js'
import RepositoryBase from '../repository/base.js'

const usuarioRepository = new RepositoryBase(usuarioModel)
const libroRepository = new RepositoryBase(libroModel)

const findOneComplete = async (id) => {
    const reservasInstances = await reservaRepository.findAll()
    const usuariosInstances = await usuarioRepository.findAll()
    const libroInstance = await libroRepository.findOne(id)

    const usuarios = usuariosInstances.map(usuario => usuario.dataValues);
    const libro = libroInstance.dataValues
    const reservas = reservasInstances.map(reserva => reserva.dataValues);


    const reservasActuales = reservas.filter(reserva => reserva.estado === '1')
    const reservasDelLibro = reservasActuales.filter(reserva => reserva.idLibro === libro.id)
    reservasDelLibro.sort((a, b) => new Date(b.fechaReserva) - new Date(a.fechaReserva));
    
    libro.reserva = reservasDelLibro[0];

    libro.reserva = reservas.find(reserva => reserva.idLibro === libro.id)

    if (libro.reserva) {
        libro.reserva.usuario = usuarios.find(
            usuario => usuario.id === libro.reserva.idUsuario)
    }

    console.log(libro)
    
    return libro
}

const service = { findOneComplete }

export default service