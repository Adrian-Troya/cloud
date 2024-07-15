/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     // Crear la tabla 'categorie'
     return knex.schema.createTable('categorie', table => {
        // Columna autoincremental 'id' que actúa como clave primaria
        table.increments('id').primary();
        // Columna de texto 'name' para el nombre de la categoría, no puede ser nula y debe ser única
        table.string('name').notNullable().unique();
        // Columna de texto 'description' para la descripción de la categoría
        table.text('description');
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
    // Eliminar la tabla 'categories'
    return knex.schema.dropTable('categorie');
};
