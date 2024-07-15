const Customer = require('../models/Customer');

// Crear una funcion para llamar a select del modelo
//envia parametros req y res
// req significa request = peticion
// res significa response= respuesta
const listCustomer = async(req, res)=>{
    try {
        //lamado a funcion de select
        const customer = await Customer.getCustomers();
        res.json(customer); //parsea a json y retrona la respuesta 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const insertCustomer = async(req, res)=>{
    try {
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer); 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const updateCustomer = async(req, res)=>{
    try {
        const customer = await Customer.update(req.body, req.params.id);
        //200 por default.
        res.json(customer); 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteCustomer = async(req, res)=>{
    try {
        const customer = await Customer.delete(req.params.id);
        res.json(customer); 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//llamar a los metodos
module.exports =  {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};