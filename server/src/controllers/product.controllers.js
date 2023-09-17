// IMPORTACION DEL MODELOS DE DATOS DE LOS PRODUCTOS
import Product from '../models/products.models.js'

// CONTROLADOR PARA GUARDAR DATOS DE UN PRODUCTOS
export const saveProduct = async (req, res) => {
    const { productName, price, size, amount, category, color, image } = req.body;
    try {
        const newProduct = new Product({
            productName,
            price,
            size,
            amount,
            category,
            color,
            image
        });
        const productSave = await newProduct.save();
        res.status(200).json({ 
            id: productSave._id,
            productName: productSave.productName,
            price: productSave.price,
            size: productSave.size,
            amount: productSave.amount,
            category: productSave.category,
            color: productSave.color,
            image: productSave.image
         })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// CONTROLADOR PARA OBTENER TODOS LOS DATOS DE LOS PRODUCTOS
export const getProducts = async (req, res) => {
    try {
        const getAllProducts = await Product.find();
        res.status(200).json(getAllProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
    
};
// CONTROLADOR PARA OBTENER LOS DATOS DE UN PRODUCTO
export const getProductByid = async (req, res) => {
    try {
        const { id } = req.params;
        const getProduct = await Product.findById(id);
        res.status(200).json(getProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// CONTROLADOR PARA ACTUALIZAR UN PRODUCTO
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName,price, size, amount, category, color } = req.body;

        const updateProduct = await Product.updateOne({ _id: id }, { $set: {productName, price, size, amount, category, color} });
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// CONTROLADOR PARA ELIMINAR UN PRODUCTO
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const removeProduct = await Product.deleteOne({_id: id });
        res.status(200).json(removeProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}