const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



const productosRoutes = require('./routes/productos');
const precioRoutes = require('./routes/precio');


app.use('/productos', productosRoutes);
app.use('/precio', precioRoutes);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});




