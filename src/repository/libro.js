/*
import RepositoryBase from './base.js'
import reserva from '../model/reserva.js'
import libro from '../model/libro.js'
import reservaRepository from './reserva.js'

const libroRepository = new RepositoryBase(libro);


const remove = async(id) => {
    try {
    } catch(err) {
        console.error('Error al intentar eliminar el libro:', err);
        return null;
    }
}


const create = async (obj) => await libroRepository.create(obj);
const findOne = async (id) => await libroRepository.findOne(id);
//const remove = async (id) => await libroRepository.remove(id);
const update = async (obj) => await libroRepository.update(obj);
const findAll = async() => await libroRepository.findAll();
 
export default { create, findOne, remove, update, findAll }
*/