const express = require('express')
const path = require('path');

const PORT = 3000;
const HOST = "192.168.1.14";
const server = express()

server.set("view engine", "ejs");

server.get('/home', (req, res) => {

    res.status(200).render(path.join(__dirname, "views/pages/home"))
});
server.get('/example', (req, res) => {
    const persona = {   nombre: "Juan", 
                        apellido: "Perez", 
                        edad: 22}

    res.status(200).render(path.join(__dirname, "views/pages/example"), {persona})
});

/*
server.get('/cursos', (req, res) => {
    
    res.status(200).send("<h1>Bienvenidas a nuestra sección cursos</h1>")
    
});

server.get('/contacto', (req, res) => {
    
    res.status(200).send("<h1>Bienvenidas a nuestra sección de contacto</h1>")
    
});
*/

server.get('*', (req, res) => {
    res.status(404).send({"error": "404", "description": "No se encuentra la ruta o recurso solicitado."})
});

server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`)
});