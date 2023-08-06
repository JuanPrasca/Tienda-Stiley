// IMPORTACION DE MONGOOSE
import mongoose from "mongoose";

// CREANDO CONEXION A LA BASE DE DATOS CREADA EN LA NUBE EN MONGODB, CON AYUDA DE MONGOOSE
export const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://stiley:stileystore20@juanprasca.8hh5soz.mongodb.net/stileyBD");
        console.log("DB-Connect")
    } catch (error) {
        console.log(error)
    }
}