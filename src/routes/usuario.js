import express from 'express'
import { Login } from '../controllers/usuario.js'
import controller from '../controllers/usuario.js'

const routes = express.Router()

routes.get('/', controller.findAll ) 
routes.post('/', controller.create )
routes.post('/login',Login)
routes.get('/:id', controller.findOne )
routes.put('/', controller.update )
routes.delete('/:id', controller.remove)

export default routes