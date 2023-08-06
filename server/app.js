import express  from "express";

// IMPORTACION DE RUTAS DE LA CARPETA "ROUTES"
import router from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";

// CREANDO EL SERVIDOR Y PERMITIENDOLE QUE LEA EL FORMATO .JSON
const app = express();
app.use(express.json());

// UTILIZACION DE RUTAS 
app.use("/api", router);
app.use("/api/products", productRoutes);

// EJEMPLO DE PAGINA PRINCIPAL SIN NINGUN TIPO DE RUTA
app.get('/', (req, res) => {
    res.send('<h1>Hello word</h1>')
});

export default app

