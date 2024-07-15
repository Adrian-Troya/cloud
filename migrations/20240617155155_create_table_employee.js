/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // Crear la tabla 'employee'
    return knex.schema.createTable('employee', table => {
        // Columna autoincremental 'id' que actúa como clave primaria
        table.increments('id').primary();
        // Columna de texto 'name' para el nombre del empleado, no puede ser nula
        table.string('name').notNullable();
        // Columna de texto 'email' para el correo electrónico del empleado, no puede ser nula y debe ser única
        table.string('email').notNullable().unique();
        // Columna de texto 'position' para la posición del empleado, no puede ser nula
        table.string('position').notNullable();
        // Columna decimal 'salary' para el salario del empleado con 14 dígitos en total y 2 decimales, no puede ser nula
        table.decimal('salary', 14, 2).notNullable();
        // Columna de fecha 'hire_date' para la fecha de contratación del empleado, no puede ser nula
        table.date('hire_date').notNullable();
    });   
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // Eliminar la tabla 'employees'
    return knex.schema.dropTable('employee');
  
};
