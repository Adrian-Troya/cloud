const { Model } = require('objection');

class Supplier extends Model {
    static get tableName() {
        return 'supplier';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'contact_number', 'address'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                contact_number: { type: 'string', minLength: 1 },
                address: { type: 'string', minLength: 1 },
                age: { type: 'integer', minimum: 0 },  // Atributo 'age' añadido
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
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

module.exports = Supplier;
