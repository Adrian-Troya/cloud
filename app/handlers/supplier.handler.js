const Supplier = require('../models/Supplier');  // Importar el modelo Supplier

// Función para manejar la solicitud GET para listar todos los proveedores
const listSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.getSuppliers();  // Llamada al método estático del modelo Supplier
        res.json(suppliers);  // Respuesta con la lista de proveedores
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud POST para insertar un nuevo proveedor
const insertSupplier = async (req, res) => {
    try {
        const { name, email, contact_number, address, age } = req.body;

        // Validar que los datos de la solicitud cumplen con los requisitos del esquema
        if (!name || !email || !contact_number || !address) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios: name, email, contact_number, address' });
        }

        // Insertar el nuevo proveedor
        const supplier = await Supplier.insert({ name, email, contact_number, address, age });
        res.status(201).json(supplier);  // Respuesta con código 201 para creación
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud PUT para actualizar un proveedor existente
const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { contact_number, address, age } = req.body;

        if (!contact_number && !address && age === undefined) {
            return res.status(400).json({ error: 'Debe proporcionar al menos uno de los campos a actualizar: contact_number, address, age' });
        }

        // Actualizar el proveedor
        const supplier = await Supplier.update(req.body, id);
        res.json(supplier);  // Envía la respuesta como JSON
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

// Función para manejar la solicitud DELETE para eliminar un proveedor
const deleteSupplier = async (req, res) => {
    try {
        await Supplier.delete(req.params.id);  // Llamada al método estático del modelo Supplier
        res.status(204).send();  // Respuesta con código 204 para eliminar recurso
    } catch (error) {
        res.status(500).json({ error: error.message });  // Manejo de errores
    }
};

module.exports = {
    listSuppliers,
    insertSupplier,
    updateSupplier,
    deleteSupplier,
};
