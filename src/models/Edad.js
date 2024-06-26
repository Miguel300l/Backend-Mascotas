import { Schema, model } from 'mongoose';

const edadSchema = new Schema(
    {
        nombre:{
            type: String,
            required: true
        },
        ficha:{
            type: String,
            required: true,
            unique:true
        },
        fecha_inicio:{
            type: Date,
            required: true
        },
        fecha_final:{
            type: Date,
            required: true
        },
        jornada:{
            type: String,
            required: true
        },
        disponible:{
            type: Boolean,
            default: true
        }

    },
    {
        versionKey: false
    }
)

export default model("Programas", edadSchema)