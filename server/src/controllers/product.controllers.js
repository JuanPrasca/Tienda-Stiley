import Product from '../models/products.models.js'

export const saveProduct = async (req, res) => {
    const { productName, amount, color } = req.body;
    try {
        const newProduct = new Product({
            productName,
            amount,
            color
        });
        const productSave = await newProduct.save();
        res.status(200).json({ 
            id: productSave._id,
            productName: productSave.productName,
            amount: productSave.amount,
            color: productSave.color
         })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}