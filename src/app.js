import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import libroRoutes from './routes/libro.js'
import alumnoRoutes from './routes/usuario.js'
import reservaRoutes from './routes/reserva.js'

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/usuario", libroRoutes)
app.use("/libro", alumnoRoutes)
app.use("/reserva", reservaRoutes)
app.use("/tipoDoc", reservaRoutes)
app.use("/tipoUsuario", reservaRoutes)

export default app;