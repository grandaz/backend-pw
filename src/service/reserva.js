import reservaRepository from '../repository/reserva.js'
import usuarioRepository from '../repository/usuario.js'
import libroRepository from '../repository/libro.js'

const findAllComplete = () => {
    const reservas = reservaRepository.findAll();
    const usuarios = usuarioRepository.findAll();
    const libros = libroRepository.findAll();

    const newReservas = reservas.map(item => {
        return {
            ...item,
            usuario: usuarios.find(x => x.id === item.idAlumno),
            libro: libros.find(x => x.id === item.idLibro)
        }
    })

    return newReservas
}

const service = { findAllComplete }

export default service