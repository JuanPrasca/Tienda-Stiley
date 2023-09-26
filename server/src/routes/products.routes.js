import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controller/products.controller.js";

const router = Router();

/* El código define diferentes rutas para manejar solicitudes HTTP en una aplicación Express. */
router.get('/products', getProducts); //Ruta para buscar todos los productos
router.get('/product/:id', getProductById); // Ruta para buscar un producto porr id
router.post('/createProduct', createProduct); // Ruta para crear un nuevo producto
router.patch('/updateProduct/:id', updateProduct); // Ruta para actualizar un producto
router.delete('/deleteProduct/:id', deleteProduct); // Ruta para Eliminar un producto

export default router