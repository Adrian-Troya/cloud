const express = require('express'); //llamdo a framework

//llamar a handlers del api
const customerHandler = require('./app/handlers/customer.handler');
const employeeHandler = require('./app/handlers/employee.handler');
const supplierHandler = require('./app/handlers/supplier.handler');
const productHandler = require('./app/handlers/product.handler');
const categorieHandler = require('./app/handlers/categorie.handler');
// variable para encapsular rutas

const router = express.Router();

//registrar las rutas

//rutas de customer
router.get('/customers', customerHandler.listCustomer); //obtener cliente
router.post('/customers', customerHandler.insertCustomer); //insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer); // actualizar o editar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer); //eliminar ccliente

router.get('/employees', employeeHandler.listEmployees); //obtener cliente
router.post('/employees', employeeHandler.insertEmployee); //insertar cliente
router.patch('/employees/:id', employeeHandler.updateEmployee); // actualizar o editar cliente
router.delete('/employees/:id', employeeHandler.deleteEmployee); //eliminar ccliente

router.get('/suppliers', supplierHandler.listSuppliers);  // Ruta para listar todos los proveedores
router.post('/suppliers', supplierHandler.insertSupplier);  // Ruta para crear un nuevo proveedor
router.put('/suppliers/:id', supplierHandler.updateSupplier);  // Ruta para actualizar un proveedor existente
router.delete('/suppliers/:id', supplierHandler.deleteSupplier);  // Ruta para eliminar un proveedor

router.get('/products', productHandler.listProducts);  // Obtener todos los productos
router.post('/products', productHandler.insertProduct);  // Insertar un nuevo producto
router.put('/products/:id', productHandler.updateProduct);  // Actualizar un producto existente
router.delete('/products/:id', productHandler.deleteProduct);  // Eliminar un producto

router.get('/categories', categorieHandler.listCategories);   // Obtener todas las categorías
router.post('/categories', categorieHandler.insertCategorie);  // Insertar una nueva categoría
router.put('/categories/:id', categorieHandler.updateCategorie); // Actualizar una categoría existente
router.delete('/categories/:id', categorieHandler.deleteCategorie);  // Eliminar una categoría

//otras rutas ...
module.exports = router;