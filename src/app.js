import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import libroRoutes from './routes/libro.js'
import usuarioRoutes from './routes/usuario.js'
import reservaRoutes from './routes/reserva.js'
import tipoDocRoutes from './routes/tipoDoc.js'
import tipoUsuarioRoutes from './routes/tipoUsuario.js'

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/usuario", usuarioRoutes)
app.use("/libro", libroRoutes)
app.use("/reserva", reservaRoutes)
app.use("/tipoDoc", tipoDocRoutes)
app.use("/tipoUsuario", tipoUsuarioRoutes)

export default app;