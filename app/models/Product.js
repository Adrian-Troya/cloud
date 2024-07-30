const { Model } = require('objection');  // Importar Model de Objection.js

class Product extends Model {
    static get tableName() {
        return 'product';  // Nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'price', 'stock'],  // Campos obligatorios al insertar un nuevo registro

            properties: {
                id: { type: 'integer' },  // Campo de tipo entero para el identificador único del producto
                name: { type: 'string', minLength: 1 },  // Campo de texto para el nombre del producto, no puede estar vacío
                description: { type: 'string' },  // Campo de texto para la descripción del producto
                price: { type: 'number' },  // Campo numérico para el precio del producto
                stock: { type: 'integer', minimum: 0 },  // Campo entero para el stock del producto, no puede ser negativo
                created_at: { type: 'string', format: 'date-time' },  // Campo de texto para la fecha de creación del registro
                updated_at: { type: 'string', format: 'date-time' },  // Campo de texto para la fecha de actualización del registro
            }
        };
    }

    // Método estático para obtener todos los productos
    static async getProducts() {
        return await Product.query();
    }

    // Método estático para insertar un nuevo producto
    static async insert(data) {
        return await Product.query().insert(data);
    }

    // Método estático para actualizar un producto existente
    static async update(data, id) {
        return await Product.query().patchAndFetchById(id, data);
    }

    // Método estático para eliminar un producto por su ID
    static async delete(id) {
        return await Product.query().deleteById(id);
    }
}

module.exports = Product;  // Exporta el modelo Product para su uso en otras partes de la aplicación
