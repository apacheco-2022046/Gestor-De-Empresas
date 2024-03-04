//Confuracion de express

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import {config} from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import empresaRoutes from  '../src/empresas/empresa.routes.js'

const app = express() 
config()
const port = process.env.PORT || 3200


//Configurar el servidor
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors()) 
app.use(helmet())
app.use(morgan('dev'))

//Declaracion de rutas
app.use(userRoutes)
app.use(empresaRoutes)






//Levantar el servidor
export const initServer = () =>{
    app.listen(port)
    console.log(`Server HHTP running in port ${port}`)
}