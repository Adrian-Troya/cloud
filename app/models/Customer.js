const { Model } = require('objection'); //Llamar a Model de la lib objection

class Customer extends Model { //Creo herencia de Model
    static get tableName() { //Especofoca el nombre de la tabla
        return 'customer';
    }
    static get jsonSchema(){ //especifica la estructura de la tabla
        return {
            type: 'object', //object para un dato, arrary para una tabla
            required: ['name', 'email'], // aqui se especifica que es obligatorio ingresar los datos al name y al email
            
            properties: {
                id: { type: 'integer'},
                name: { type: 'string', minLength: 1},
                email: { type: 'string', format: 'email'},
                age: {type: 'integer'}

            }
        };
   }
   static async getCustomers(){ //metodo para listar customer: (clientes)
        return await Customer.query(); // select * from customer
   }
   static async insert(data){  //diccionario de datos, metodo para insertar clientes
        return await Customer.query().insert(data); //insert into customer values...
   }
   static async update(data, id){ //metodo para actualizar o editar un cliente
        return await Customer.query().patch(id, data); //update set data where id = 0 
   }
   static async delete(id){ //metodo para eliminar cliente 
        return await Customer.query().deleteById(id); //delete from customer where id = 0
   }
}

module.exports = Customer;
