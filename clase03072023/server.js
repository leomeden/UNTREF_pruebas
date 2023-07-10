const express = require("express");

require("dotenv").config();

const server = express();

const { conectar, desconectar} = require('./mongodb.js');
/*
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
*/
/*
const { findAll, findOneById, create, update, destroy } = require("./database/data.manager.js")
*/
//Obtener todos los productos
server.get('/coches/', async (req, res) => {
    const client = await conectar();
    const db = client.db('prueba');
    //const coches = await db.collection('coches').find({ id: { $lt: 5 } }).toArray();
    const coches = await db.collection('coches').find().toArray();
    //console.table(coches);

    await desconectar();

    res.status(200).send(coches);
    /*
    findAll()
        .then((products) => res.status(200).send(products))
        .catch((err) => res.status(400).send(err.message))
    */
}); 

//Obtener 1 producto especifico
server.get('/coches/:id', async (req, res) => {
    const { id } = req.params;

    const client = await conectar();
    const db = client.db('prueba');
    //const coches = await db.collection('coches').find({ id: { $lt: 5 } }).toArray();
    const coche = await db.collection('coches').findOne({ id: +id });
    //console.table(coches);

    await desconectar();

    if (!coche) return res.status(404).send("No hay ningun coche con ese id");


    res.status(200).send(coche);

    /*
    findOneById(+id)
        .then((product) => res.status(200).send(product))
        .catch((err) => res.status(400).send(err.message))
    */
}); 

/*
//Crear un producto
server.post('/productos/', (req, res) => {
    const { marca, nombre, precio, stock } = req.body
    create({ marca, nombre, precio, stock })
        .then((el) => res.status(201).send(el))
        .catch((err) => res.status(400).send(err.message))    
}); 
*/
/*
//Actualizar un producto
server.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { nombre, marca, precio, stock } = req.body
    update({ id: +id, marca, nombre, precio, stock })
        .then((el) => res.status(200).send(el))
        .catch((err) => res.status(400).send(err.message))  
}); 
*/
/*
//Eliminar un producto
server.delete('/productos/:id', (req, res) => {
    const { id } = req.params
    destroy( +id )
        .then((el) => res.status(200).send(el))
        .catch((err) => res.status(400).send(err.message))  
}); 
*/
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Ejecutandose en http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
});