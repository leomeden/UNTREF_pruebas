const { MongoClient } = require('mongodb');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const URL = process.env.DATABASE_URL;
console.log("prueba: ", URL);
const client = new MongoClient(URL);

async function conectar() {
    console.log("Conectando...");
    try {
        await client.connect();
        console.log("Se ha conectado a MongoDB");
        return client;
    } catch (error) {
        console.log("No se ha logrado conectar a MongoDB");
    }
    return null;
}

async function desconectar() {
    console.log("Desconectando...");
    try {
        await client.close();
        console.log("Se ha desconectado de MongoDB");
        return client;
    } catch (error) {
        console.log("No se ha logrado desconectar de MongoDB");
    }
    return null;
}

module.exports = { conectar, desconectar };