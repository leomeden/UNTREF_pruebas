const express = require('express')

const PORT = 3050;
const HOST = "localhost";
const server = express()

server.get('/', (req, res) => {

    res.status(200).send("<h1>Bienvenides a nuestra web</h1>")
});

server.get('/cursos', (req, res) => {
    
    res.status(200).send("<h1>Bienvenidas a nuestra sección cursos</h1>")
    
});

server.get('/contacto', (req, res) => {
    
    res.status(200).send("<h1>Bienvenidas a nuestra sección de contacto</h1>")
    
});


server.get('*', (req, res) => {
    res.status(404).send({"error": "404", "description": "No se encuentra la ruta o recurso solicitado."})
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));