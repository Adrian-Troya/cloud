const Employee = require('../models/Employee');

// Función para manejar la solicitud GET para listar todos los empleados

const listEmployees = async(req, res)=>{
    try {
        //lamado a funcion de select
        const employee = await Employee.getEmployees();
        res.json(employee); //parsea a json y retrona la respuesta 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
// Función para manejar la solicitud POST para insertar un nuevo empleado
const insertEmployee = async (req, res) => {
    try {
        const employee = await Employee.insert(req.body);  // Llamada al método estático del modelo Employee
        res.status(201).json(employee);  // Respuesta con código 201 para creación
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud PUT para actualizar un empleado existente
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.update(req.body, req.params.id);  // Llamada al método estático del modelo Employee
        res.json(employee);  // Envía la respuesta como JSON
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud DELETE para eliminar un empleado
const deleteEmployee = async (req, res) => {
    try {
        await Employee.delete(req.params.id);  // Llamada al método estático del modelo Employee
        res.status(204).send();  // Respuesta con código 204 para eliminar recurso
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

module.exports = {
    listEmployees,
    insertEmployee,
    updateEmployee,
    deleteEmployee,
};
