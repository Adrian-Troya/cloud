const { Model } = require('objection'); //Llamar a Model de la lib objection

class Customer extends Model { //Creo herencia de Model
    static get tableName() { //Especifica el nombre de la tabla
        return 'customer';
    }
    static get jsonSchema(){ //Especifica la estructura de la tabla
        return {
            type: 'object', // 'object' para un registro, 'array' para una colección de registros
            required: ['name', 'email'], // 'name' y 'email' son obligatorios

            properties: {
                id: { type: 'integer'},
                name: { type: 'string', minLength: 1},
                email: { type: 'string', format: 'email'},
                phone_number: { type: 'string', minLength: 1 }, // Nuevo campo para el número de teléfono
                address: { type: 'string', minLength: 1 }, // Nuevo campo para la dirección
                created_at: { type: 'string', format: 'date-time' }, // Nuevo campo para la fecha de creación
                status: { type: 'string', enum: ['activo', 'inactivo'] } // Nuevo campo para el estado
            }
        };
   }
   static async getCustomers(){ // Método para listar clientes
        return await Customer.query(); // SELECT * FROM customer
   }
   static async insert(data){  // Método para insertar un nuevo cliente
        return await Customer.query().insert(data); // INSERT INTO customer ...
   }
   static async update(data, id){ // Método para actualizar un cliente existente
        return await Customer.query().patchAndFetchById(id, data); // UPDATE customer SET ... WHERE id = ...
   }
   static async delete(id){ // Método para eliminar un cliente
        return await Customer.query().deleteById(id); // DELETE FROM customer WHERE id = ...
   }
}

module.exports = Customer;
