import app from "./app.js";
// IMPORTACION DE LA CONEXION A LA BASE DE DATOS DESDE EL ARCHIVO "DD.CONFIG.JS"
import { connectDb } from "./src/config/db.config.js";

//CREACION DEL PUERTO DONDE SE EJECUTARA EL SERVIDOR
const PORT = 2000;
// CONECTARNOS A LA BASE DE DATOS CON LA FUNCION CREADA EN DB.CONFIG.JS
connectDb();
// PONER A ESCUCHAR EL SERVIDOR
app.listen(PORT, ()=> {
    console.log(`Servidor en: http://localhost:${PORT}/`);
})
