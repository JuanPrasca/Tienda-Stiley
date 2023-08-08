// IMPORTACION DE MONGOOSE
import mongoose from "mongoose";

// CREACION DEL SCHEMA PARA EL USUARIO. UN SCHEMA HACE REFERENCIA
// A LA ESTRUCTURA QUE TENDRA NUESTRA TABLA EN LA BASE DE DATOS
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
    }
},{
    timestamps: true
})
// EXPORTACION DEL MODELO CON EL NOMBRE "USERS" COMO PRIMER PARAMETRO Y EL SCHEMA COMO EL OTRO
export default mongoose.model("Users", userSchema);