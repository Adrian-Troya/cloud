/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('supplier', function(table){
        // Añadir nuevo atributo 'age'
        table.integer('age').defaultTo(0);

        // Añadir nuevo atributo 'created_at'
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Añadir nuevo atributo 'updated_at'
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        // Añadir nuevo atributo 'address' (si no existe ya)
        table.string('address').notNullable();

        // Añadir nuevo atributo 'contact_number' (si no existe ya)
        table.string('contact_number').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('supplier', function(table){
        // Eliminar atributos añadidos en 'up'
        table.dropColumn('age');
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
        table.dropColumn('address');
        table.dropColumn('contact_number');
    });
};
