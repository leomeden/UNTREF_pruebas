//const http = require("http");
const express = require("express");
const path = require("path");

const PORT = 3000;
const HOST = "localhost";
const server = express();

//middleware  ///  http://localhost:3000/public/img/arg.png
server.use('/public', express.static(path.join(__dirname, "public")));

server.get('/', (req, res) => {

    res.status(200).send("<h1>Bienvenidos</h1>")
    //res.send("<h1>Hola Mundo con Express</h1>")
});

server.get('/materia', (req, res) => {
    console.log(__dirname)
    console.log(__filename)
    res.status(200).send("<h1>Esto es programacion backend</h1>")
    //res.send("<h1>Hola Mundo con Express</h1>")
});

//// no recomienda el uso de .use()
// esto va siempre al final porque captura todo lo que no capturaron las rutas anteriores
/*
server.use((req, res) => {
    res.status(404).send("<h1>Recurso no encontrado</h1>")
    
});
*/
//buena practica es usar server.get('*'......
server.get('*', (req, res) => {
    res.status(404).send("<h1>Recurso no encontrado</h1>")
});




/*
const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type":"text/plain; charser=utf8"});
    res.end("Hola Mundo");
});
*/
server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));
