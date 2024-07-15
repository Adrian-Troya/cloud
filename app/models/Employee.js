const { Model } = require('objection');  // Importar Model de Objection.js

class Employee extends Model {
    // Especifica el nombre de la tabla en la base de datos
    static get tableName() {
        return 'employee';  // Nombre de la tabla en la base de datos
    }

    // Define el esquema JSON para validar la estructura de datos del modelo
    static get jsonSchema() {
        return {
            type: 'object',  // Define que el tipo de datos es un objeto
            required: ['name', 'email', 'position', 'salary', 'hire_date'],  // Campos obligatorios al insertar un nuevo registro
            
            properties: {
                id: { type: 'integer' },  // Campo de tipo entero para el identificador único del empleado
                name: { type: 'string', minLength: 1 },  // Campo de texto para el nombre del empleado, no puede estar vacío
                email: { type: 'string', format: 'email' },  // Campo de texto para el correo electrónico del empleado, debe ser un email válido
                position: { type: 'string', minLength: 1 },  // Campo de texto para la posición del empleado, no puede estar vacío
                salary: { type: 'number' },  // Campo numérico para el salario del empleado, configurado como decimal(14,2) en la migración                hire_date: { type: 'string', format: 'date' },  // Campo de texto para la fecha de contratación del empleado, debe ser una fecha válida
                age: { type: 'integer' }  // Campo entero para la edad del empleado
            }
        };
    }

    // Método estático para obtener todos los empleados
    static async getEmployees() {
        return await Employee.query();  // Realiza una consulta para obtener todos los registros de la tabla 'employee'
    }

    // Método estático para insertar un nuevo empleado
    static async insert(data) {
        return await Employee.query().insert(data);  // Inserta un nuevo registro en la tabla 'employee' con los datos proporcionados
    }

    // Método estático para actualizar un empleado existente
    static async update(data, id) {
        return await Employee.query().patchAndFetchById(id, data);  // Actualiza el registro con el ID especificado con los datos proporcionados
    }

    // Método estático para eliminar un empleado por su ID
    static async delete(id) {
        return await Employee.query().deleteById(id);  // Elimina el registro con el ID especificado de la tabla 'employee'
    }
}

module.exports = Employee;  // Exporta el modelo Employee para su uso en otras partes de la aplicación
