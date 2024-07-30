/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('categorie', function(table) {
        // Añadir el atributo 'description'
        table.string('description');

        // Añadir el atributo 'created_at'
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Añadir el atributo 'updated_at'
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // Añadir el atributo 'status'
        table.enu('status', ['activo', 'inactivo']).defaultTo('activo');

        // Añadir el atributo 'age'
        table.integer('age').defaultTo(0);

        // Añadir otro atributo adicional (opcional)
        // Aquí puedes añadir otro atributo si es necesario, por ejemplo:
        // table.boolean('is_active').defaultTo(true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('categorie', function(table) {
        // Eliminar atributos añadidos en 'up'
        table.dropColumn('description');
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
        table.dropColumn('status');
        table.dropColumn('age');
        // Eliminar otro atributo adicional (si lo añadiste)
        // table.dropColumn('is_active');
    });
};
