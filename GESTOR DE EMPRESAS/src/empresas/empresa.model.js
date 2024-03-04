import mongoose from "mongoose"

const empresaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    impacto: {
        type: String,
        required: true
    },
    añosTrayectoria: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
})



export default mongoose.model('empresa', empresaSchema)