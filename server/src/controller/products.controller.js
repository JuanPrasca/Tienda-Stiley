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
        const [result] = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
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
        id_categoria, nombre_producto, estado_producto, cantidad_producto, precio_producto, imagen_producto, color_producto, talla_producto, tipo_tela_producto, descripcion_producto } = req.body
    try {
        await pool.query('INSERT INTO productos ( id_categoria, nombre_producto, estado_producto, cantidad_producto, precio_producto, imagen_producto, color_producto, talla_producto, tipo_tela_producto, descripcion_producto ) VALUES (?, ?, "Disponible", ?, ?, ?, ?, ?, ?, ?)', [id_categoria, nombre_producto, cantidad_producto, precio_producto, imagen_producto, color_producto, talla_producto, tipo_tela_producto, descripcion_producto ]);
        res.status(201).send({ message: 'Producto creado exitosamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al crear el producto' })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        id_categoria, nombre_producto, estado_producto, cantidad_producto, precio_producto, imagen_producto, color_producto, talla_producto, tipo_tela_producto, descripcion_producto
    } = req.body;

    try {
        // Verificar si el producto con el id proporcionado existe antes de actualizar
        const existingProduct = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id]);

        if (!existingProduct || existingProduct.length === 0) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }

        // Actualizar el producto en la base de datos
        await pool.query(
            'UPDATE productos SET id_categoria = ?, nombre_producto = ?, estado_producto = ?, cantidad_producto = ?, precio_producto = ?, imagen_producto = ?, color_producto = ?, talla_producto = ?, tipo_tela_producto = ?, descripcion_producto = ? WHERE id_producto = ?',
            [id_categoria, nombre_producto, estado_producto, cantidad_producto, precio_producto, imagen_producto, color_producto, talla_producto, tipo_tela_producto, descripcion_producto, id]
        );

        res.status(200).send({ message: 'Producto actualizado exitosamente' });
    } catch (error) {
        res.status(500).send({ message: 'Error al actualizar el producto' });
    }
}



export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE id_producto = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).send({ message: `No se pudo encontrar el producto` })
        } else {
            res.status(200).send({ message: `Producto eliminado exitosamente` })
        }
    } catch (error) {
        res.status(500).send({ message: 'Error al eliminar el producto' })

    }
}