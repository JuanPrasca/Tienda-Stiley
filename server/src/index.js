// Importar las bibliotecas necesarias
import express from 'express' // Framework web Express
import cors from 'cors' // Middleware para manejar CORS (Cross-Origin Resource Sharing)
import indexRoutes from './routes/index.routes.js' // Rutas para el índice
import productsRoutes from './routes/products.routes.js'
/* import userRoutes from './routes/user.routes.js'; // Rutas relacionadas con los usuarios
import fileRouter from './routes/file.routes.js'; // Rutas relacionadas con los archivos */
import { PORT } from './config.js' // Importar el puerto desde la configuración

const app = express() // Crear una instancia de la aplicación Express

app.use(cors()) // Configurar el middleware CORS para manejar las solicitudes de origen cruzado
app.use(express.json()) // Habilitar el análisis del cuerpo de solicitud JSON

// Configurar las rutas para diferentes partes de la aplicación
app.use(indexRoutes)
app.use('/api', productsRoutes)
/* app.use('/api', userRoutes);
app.use('/api', fileRouter); */

// Configurar un manejador para rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send({
    message: 'Este endpoint no se encuentra disponible'
  })
})

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
