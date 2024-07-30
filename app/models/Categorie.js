const { Model } = require('objection'); // Importar Model de Objection.js

class Categorie extends Model {
    static get tableName() {
        return 'categorie';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'], // 'name' es obligatorio

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                description: { type: 'string' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                status: { type: 'string', enum: ['activo', 'inactivo'], default: 'activo' }
            }
        };
    }

    static async getCategories() {
        return await Categorie.query(); // select * from categorie
    }

    static async insert(data) {
        return await Categorie.query().insert(data); // insert into categorie values...
    }

    static async update(data, id) {
        return await Categorie.query().patchAndFetchById(id, data); // update set data where id = 0
    }

    static async delete(id) {
        return await Categorie.query().deleteById(id); // delete from categorie where id = 0
    }
}

module.exports = Categorie;
