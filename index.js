//Importar librerias 
const express = require('express');
//llamar conf al db.js 
const knex = require('./db');
//llamamos a la ruta routes.js conexion de cada ruta
const routes= require('./routes');

const app = express(); // creamos una njueva instancia}
const port = 3000; //puerto de salida

app.use(express.json()); //configura tipo de dato json

app.use('/api', routes); // configura la url base y rutas

app.listen(port, () => { // ejecuta la api por el puerto 3000 
    //luego de ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`)
})

