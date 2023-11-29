
import RepositoryBase from './base.js'
import reserva from '../model/reserva.js'
import libro from '../model/libro.js'

const reservaRepository = new RepositoryBase(reserva);
const libroRepository = new RepositoryBase(libro);

const create = async (objReserva) => {
    try {
        const newReserva = await reservaRepository.create(objReserva);

        if (newReserva) {

            const libros = await libroRepository.findAll()
            const libro = libros.find((item) => item.id === objReserva.idLibro);

            if (libro) {

                const libroData = libro.get({ plain: true });

                libroData.vecesReservado += 1;
                libroData.available = false;

                const updateResult = await libroRepository.update(libroData)
                console.log('Update Result:', updateResult);

            } else {
                console.error('Libro no encontrado:', objReserva.idLibro);
            }
        }

        objReserva.id = newReserva.id;

        return objReserva;
    } catch(err) {
        console.error('Error al intentar crear la reserva:', err);
        return null;
    }
    
}

const findOne = async (id) => await reservaRepository.findOne(id);
const remove = async (id) => await reservaRepository.remove(id);
const update = async (objReserva) => await reservaRepository.update(objReserva);
const findAll = async() => await reservaRepository.findAll();
 
export default { create, findOne, remove, update, findAll }
