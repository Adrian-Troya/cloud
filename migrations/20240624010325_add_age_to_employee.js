/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('customer', function(table) {
        table.integer('age'); // Nuevo campo para la edad del cliente
        table.enu('status', ['Activo', 'Inactivo']).defaultTo('Activo'); // Nuevo campo para el estado del cliente
        table.timestamp('registration_date').defaultTo(knex.fn.now()); // Nuevo campo para la fecha de registro del cliente
        table.string('phone_number'); // Nuevo campo para el número de teléfono
        table.string('address'); // Nuevo campo para la dirección
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('customer', function(table) {
        table.dropColumn('age'); // Eliminar el campo de edad del cliente
        table.dropColumn('status'); // Eliminar el campo de estado del cliente
        table.dropColumn('registration_date'); // Eliminar el campo de fecha de registro del cliente
        table.dropColumn('phone_number'); // Eliminar el campo de número de teléfono
        table.dropColumn('address'); // Eliminar el campo de dirección
    });
};
