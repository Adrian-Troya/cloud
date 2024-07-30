const { Model } = require('objection'); // Llamar a Model de la librería Objection

class Customer extends Model { // Crear herencia de Model
    static get tableName() { // Especificar el nombre de la tabla
        return 'customer';
    }

    static get jsonSchema() { // Especificar la estructura de la tabla
        return {
            type: 'object', // object para un dato, array para una tabla
            required: ['name', 'email'], // Campos obligatorios
            
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                age: { type: 'integer' },
                status: { type: 'string', enum: ['Activo', 'Inactivo'] }, // Nuevo atributo status
                registration_date: { type: 'string', format: 'date-time' } // Nuevo atributo registration_date
            }
        };
    }

    static async getCustomers() { // Método para listar clientes
        return await Customer.query(); // select * from customer
    }

    static async insert(data) {  // Diccionario de datos, método para insertar clientes
        return await Customer.query().insert(data); // insert into customer values...
    }

    static async update(data, id) { // Método para actualizar o editar un cliente
        return await Customer.query().patch(id, data); // update set data where id = 0 
    }

    static async delete(id) { // Método para eliminar cliente 
        return await Customer.query().deleteById(id); // delete from customer where id = 0
    }
}

module.exports = Customer; // Exportar el modelo para su uso en otras partes de la aplicación
