/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('customer', function(table){
        table.integer('age');
        table.string('phone_number'); // Nuevo campo para el número de teléfono
        table.string('address'); // Nuevo campo para la dirección
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Nuevo campo para la fecha de creación
        table.enu('status', ['activo', 'inactivo']).defaultTo('activo'); // Nuevo campo para el estado
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('customer', function(table){
        table.dropColumn('age');
        table.dropColumn('phone_number'); // Eliminar campo para el número de teléfono
        table.dropColumn('address'); // Eliminar campo para la dirección
        table.dropColumn('created_at'); // Eliminar campo para la fecha de creación
        table.dropColumn('status'); // Eliminar campo para el estado
    });
};
