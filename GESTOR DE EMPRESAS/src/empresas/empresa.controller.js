'use strict'
//Importaciones para generar archivo de excel
//const workbook = new exceljs.Workbook()  
//const worksheet = workbook.addWorksheet('Empresa')
import Empresa from './empresa.model.js'
//import { checkUpdate } from '../utils/validator.js'



export const agregarE = async(req, res)=>{
    try{
        let data = req.body
        let empresa = new Empresa(data)
        await empresa.save()

        return res.send({message: 'Empresa agregada satisfactoriamente '})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'error al agregar empresa',err})
    }
}





export const updateEmpresa = async(req, res)=>{
    try{
            let {id} = req.params
            //Obtener id
            let data = req.body
            let update = checkUpdate(data, false)
            if(!update) return res.status(400).send({message: 'datos no encontrados'})
            let updatedEmpresa = await Empresa.findOneAndUpdate(
                {_id: id}, data,
                {new: true}
        )
        if(!updatedEmpresa) return res.status(404).send({message: 'Error'})
        return res.send({message: 'Empresa Actulizada', updatedEmpresa})
    }catch(err){
        console.error(err)

        return res.status(500).send({message:   'Error al actualizar la empresa'})
    }
}



export const reportEmpresas = async(req, res)=>{

    try {

         const workbook = new exceljs.Workbook()
         const worksheet = workbook.addWorksheet('Empresas')
         worksheet.addRow(['name', 'impacto', 'Años de trayectoria de la empresa', 'Categoria'])
         const empresas = await Empresa.find()
         const filePath = 'empresas.xlsx'
         await workbook.xlsx.writeFile(filePath)
        res.status(200).send({message: 'Archivo generado',filePath})
    } catch (error) {
        console.error(error)
        res.status(500).send({message:'No se puedo generar el excel'})
        

    }
}
