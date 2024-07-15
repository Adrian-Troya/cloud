const Product = require('../models/Product');  // Importar el modelo Product

// Función para manejar la solicitud GET para listar todos los productos
const listProducts = async (req, res) => {
    try {
        const products = await Product.getProducts();  // Llamada al método estático del modelo Product
        res.json(products);  // Respuesta con la lista de productos
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};


// Función para manejar la solicitud POST para insertar un nuevo producto
const insertProduct = async (req, res) => {
    try {
        const { name, description, price, stock, age } = req.body;

        // Validar que los datos de la solicitud cumplen con los requisitos del esquema
        if (!name || !price || stock === undefined) {
            return res.status(400).json({ error: 'Campos obligatorios: name, price, stock' });
        }

        // Asegúrate de que `price` es un número
        if (typeof price !== 'number') {
            return res.status(400).json({ error: 'El campo price debe ser un número' });
        }

        // Asegúrate de que `stock` es un número entero
        if (typeof stock !== 'number' || !Number.isInteger(stock)) {
            return res.status(400).json({ error: 'El campo stock debe ser un número entero' });
        }

        // Insertar el nuevo producto
        const product = await Product.insert({ name, description, price, stock, age });
        res.status(201).json(product);  // Respuesta con código 201 para creación
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud PUT para actualizar un producto existente
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock, age } = req.body;

        // Validar que al menos uno de los campos de actualización está presente
        if (!name && !description && !price && !stock && age === undefined) {
            return res.status(400).json({ error: 'Debe proporcionar al menos uno de los campos a actualizar: name, description, price, stock, age' });
        }

        // Actualizar el producto
        const product = await Product.update(req.body, id);
        res.json(product);  // Envía la respuesta como JSON
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud DELETE para eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        await Product.delete(req.params.id);  // Llamada al método estático del modelo Product
        res.status(204).send();  // Respuesta con código 204 para eliminar recurso
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

module.exports = {
    listProducts,
    insertProduct,
    updateProduct,
    deleteProduct,
};
