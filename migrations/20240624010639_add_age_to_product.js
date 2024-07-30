/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('product', function(table) {
        // Añadir el atributo 'description'
        table.string('description');

        // Añadir el atributo 'price'
        table.decimal('price', 10, 2);  // Permite valores decimales con 2 decimales

        // Añadir el atributo 'stock'
        table.integer('stock').defaultTo(0);  // Valor por defecto de 0

        // Añadir el atributo 'created_at'
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Añadir el atributo 'updated_at'
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('product', function(table) {
        // Eliminar atributos añadidos en 'up'
        table.dropColumn('description');
        table.dropColumn('price');
        table.dropColumn('stock');
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
    });
};
