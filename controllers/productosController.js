

const { connectToDatabase } = require('../config/db');

const getProductosEnStock = async (req, res) => {
  try {
    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Acceder a la colección "products"
    const collection = db.collection('products');
    console.log(collection);

    // Consultar y obtener los productos en stock
    const productosEnStock = await collection.find({ inStock: true }).toArray();

    
    res.render('producto', { productosEnStock });
  } catch (error) {
    console.error('Error al obtener productos en stock:', error);
    res.status(500).json({ error: 'Error al obtener productos en stock' });
  }
};

module.exports = {
  getProductosEnStock,
};

