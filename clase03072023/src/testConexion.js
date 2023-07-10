const { conectar, desconectar} = require('../mongodb.js');

async function getCoche() {
    const client = await conectar();
    const db = client.db('prueba');
    const coche = await db.collection('coches').findOne({ id: 2 });
    console.log(coche);

    await desconectar();
}

async function getCoches() {
    const client = await conectar();
    const db = client.db('prueba');
    //const coches = await db.collection('coches').find({ id: { $lt: 5 } }).toArray();
    const coches = await db.collection('coches').find({ descuento: { $exists: true } }).toArray();
    console.table(coches);

    await desconectar();
}

async function test() {
    
    await getCoche();
    await getCoches();
}

test()