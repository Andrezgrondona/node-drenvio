const { connectToDatabase } = require('../config/db');

const getPrecioEspecial = async (req, res) => {
  const { id_usuario, nombre_producto } = req.params;

  try {
    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Acceder a la colección "products"
    const collection = db.collection('products');

    // Consultar el producto por nombre
    const product = await collection.findOne({ name: nombre_producto });

    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    let precio;
    let precioProducto;

   
    if (product.brand === "Nike") {
      precio = 'Precio especial';
      precioProducto = product.basePrice; 
    } else {
     
      precioProducto = product.basePrice; 
    }

    res.render('precio', { precio, precioProducto, brand: product.brand , name: product.name});
  } catch (error) {
    console.error('Error al obtener el precio del producto:', error);
    res.status(500).json({ error: 'Error al obtener el precio del producto' });
  }
};

module.exports = {
  getPrecioEspecial,
};
