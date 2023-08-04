import { Router } from "express";
import { register, login } from "../controllers/auth.controllers.js";
import { saveProduct } from "../controllers/product.controllers.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/saveProduct', saveProduct);

export default router;