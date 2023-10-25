
const { MongoClient } = require('mongodb');

const uri = 'mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db('drenvioChallenge');
    
    return db;
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
    throw error;
  }
}

module.exports = { connectToDatabase };
