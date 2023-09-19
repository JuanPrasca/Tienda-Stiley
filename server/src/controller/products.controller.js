import { pool } from "../db.js";


// Servicio para buscar todos los productos
export const getProducts = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM productos');
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ message: 'Error al listar los productos' });
    }
}

// Servicio para buscar un solo producto
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('SELECT * FROM productos WHERE IdProducto = ?', [id]);
        if (result.length === 0) {
            res.status(404).send({ message: `No se pudo encontrar el producto` })
        } else {
            res.status(200).send({ result })
        }
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener el producto' })
    }
}

//Servivio para crear un producto
export const createProduct = async (req, res) => {
    const {
    IdCategoria, idReferencia, nombreProducto, estadoProducto, stockMinimo } = req.body
    try {
        await pool.query('INSERT INTO productos ( idCategoria, idReferencia, nombreProducto, estadoProducto, stockMinimo ) VALUES (?, ?, ?, ?, ?)', [IdCategoria, idReferencia, nombreProducto, estadoProducto, stockMinimo ]);
        res.status(201).send({ message: 'Producto creado exitosamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el producto' })  
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { IdCategoria, idReferencia, nombreProducto, estadoProducto, stockMinimo } = req.body;
    try {
        const [result] = await pool.query('UPDATE productos SET IdCategoria=?, idReferencia=?, nombreProducto=?, estadoProducto=?, stockMinimo=? WHERE IdProducto=?', [IdCategoria, idReferencia, nombreProducto, estadoProducto, stockMinimo, id]);
        if (result.affectedRows === 0) {
            res.status(404).send({ message: `No se pudo encontrar el producto` })
        } else {
            res.status(200).send({ message: `Producto actualizado exitosamente` })
        }
    } catch (error) {
        res.status(500).send({ message: 'Error al actualizar el producto' })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE IdProducto = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).send({ message: `No se pudo encontrar el producto` })
        } else {
            res.status(200).send({ message: `Producto eliminado exitosamente` })
        }
    } catch (error) {
        res.status(500).send({ message: 'Error al eliminar el producto' })

    }
}