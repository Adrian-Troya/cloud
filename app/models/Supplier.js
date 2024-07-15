const { Model } = require('objection');  // Importar Model de Objection.js

class Supplier extends Model {
    static get tableName() {
        return 'supplier';  // Nombre de la tabla en la base de datos
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'contact_number', 'address'],  // Campos obligatorios al insertar un nuevo registro

            properties: {
                id: { type: 'integer' },  // Campo de tipo entero para el identificador único del proveedor
                name: { type: 'string', minLength: 1 },  // Campo de texto para el nombre del proveedor, no puede estar vacío
                email: { type: 'string', format: 'email' },  // Campo de texto para el correo electrónico del proveedor, debe ser un email válido
                contact_number: { type: 'string', minLength: 1 },  // Campo de texto para el número de contacto del proveedor
                address: { type: 'string', minLength: 1 },  // Campo de texto para la dirección del proveedor, no puede estar vacío
                created_at: { type: 'string', format: 'date-time' },  // Campo de texto para la fecha de creación del registro
                updated_at: { type: 'string', format: 'date-time' },  // Campo de texto para la fecha de actualización del registro
                age: { type: 'integer' }  // Campo entero para la edad del proveedor
            }
        };
    }

    static async getSuppliers() {
        return await Supplier.query();
    }

    static async insert(data) {
        return await Supplier.query().insert(data);
    }

    static async update(data, id) {
        return await Supplier.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Supplier.query().deleteById(id);
    }
}

module.exports = Supplier;  // Exportar el modelo Supplier para 
