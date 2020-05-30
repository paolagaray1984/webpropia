const express = require('express');
const app = express();

app.use(express.static('public'));

const webRoutes= require('./routes/webRoutes');

app.use(webRoutes);

app.listen(3000,()=> console.log('servidor corriendo en el puerto 3000'));
