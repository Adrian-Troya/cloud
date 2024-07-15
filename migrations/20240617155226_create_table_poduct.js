/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     // Crear la tabla 'product'
     return knex.schema.createTable('product', table => {
        // Columna autoincremental 'id' que actúa como clave primaria
        table.increments('id').primary();
        // Columna de texto 'name' para el nombre del producto, no puede ser nula
        table.string('name').notNullable();
        // Columna de texto 'description' para la descripción del producto
        table.text('description');
        // Columna decimal 'price' para el precio del producto, no puede ser nulo
        table.decimal('price', 14, 2).notNullable();
        // Columna entera 'stock' para el stock disponible del producto, no puede ser negativo
        table.integer('stock').unsigned().notNullable().defaultTo(0);
        // Columna de fecha 'created_at' para la fecha de creación del registro, con valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now());
        // Columna de fecha 'updated_at' para la fecha de actualización del registro, con valor por defecto
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // Eliminar la tabla 'products'
    return knex.schema.dropTable('product');
};
