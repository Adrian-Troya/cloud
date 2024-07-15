/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // Crear la tabla 'proveedor'
    return knex.schema.createTable('supplier', table => {
        // Columna autoincremental 'id' que actúa como clave primaria
        table.increments('id').primary();
        // Columna de texto 'name' para el nombre del proveedor, no puede ser nula
        table.string('name').notNullable();
        // Columna de texto 'email' para el correo electrónico del proveedor, no puede ser nula y debe ser única
        table.string('email').notNullable().unique();
        // Columna de texto 'contact_number' para el número de contacto del proveedor
        table.string('contact_number').notNullable();
        // Columna de texto 'address' para la dirección del proveedor
        table.string('address').notNullable();
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
    // Eliminar la tabla 'suppliers'
    return knex.schema.dropTable('supplier');
  
};
