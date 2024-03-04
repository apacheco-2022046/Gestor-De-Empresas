'use strict'



import express from 'express'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
import { agregarE, updateEmpresa } from './empresa.controller.js'

const api = express.Router()



api.post('/agregarE', [validateJwt], agregarE)
api.put('/updateEmpresa', updateEmpresa)





export default api