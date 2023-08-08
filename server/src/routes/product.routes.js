import { Router } from "express";

import { getProducts, saveProduct, getProductByid, updateProduct, deleteProduct } from "../controllers/product.controllers.js";

const productRoutes = Router();

productRoutes.post('/saveProduct', saveProduct);
productRoutes.get('/getproducts', getProducts);
productRoutes.get('/getproduct/:id', getProductByid);
productRoutes.put('/updateproduct/:id', updateProduct);
productRoutes.delete('/deleteproduct/:id', deleteProduct);

export default productRoutes;