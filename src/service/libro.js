/*
import reservaRepository from '../repository/reserva.js'
import usuarioModel from '../model/usuario.js'
import libroModel from '../model/libro.js'
import RepositoryBase from '../repository/base.js'

const usuarioRepository = new RepositoryBase(usuarioModel)
const libroRepository = new RepositoryBase(libroModel)

const findOneComplete = async (req, res) => {
    const reservas = await reservaRepository.findAll()
    const usuarios = await usuarioRepository.findAll()
    const libros = await libroRepository.findAll()

    console.log('usuarios: ')
    console.log(usuarios)

    const newReservas = reservas.map(item => {
        return {
            ...item.get({ plain: true }),
            usuario: usuarios.find(x => x.id === item.idAlumno),
            libro: libros.find(x => x.id === item.idLibro)
        }
    })
    console.log('Reservas: ')
    console.log(newReservas)
    return newReservas
}

const service = { findOneComplete }

export default service
*/