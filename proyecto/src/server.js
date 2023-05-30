const { log } = require("console");
const http = require("http");

const HOST = "localhost";
const PORT = 3000;

const coches = [
    {marca: "ford", anio: 2020},
    {marca: "fiat", anio: 2015},
    {marca: "chevrolet", anio: 2023}
]
const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);

    if (request.url === "/ejemplo/texto") {
        response.writeHead(200, {"content-type": "text/plain; charset=utf8"});
        response.end("Hola Mundo. Esto es programación backend");
    }else if (request.url === "/ejemplo/html") {
        response.writeHead(200, {"content-type": "text/html; charset=utf8"});
        response.end("<h1>Hola mundo</h1><p>Esto es programación backend</p>");
    } else if (request.url === "/ejemplo/json") {
        response.writeHead(200, {"content-type": "application/json"});
        response.end(JSON.stringify(coches, null, "\t"));
    } else {
        response.writeHead(404, {"content-type": "text/plain; charset=utf8"});
        response.end("Recurso no encontrado");
    } 
});

server.on("request", (request) => {
    console.log(request.url);
})

server.listen(PORT, HOST, () => console.log(`el servidor se esta ejecutando en http://${HOST}:${PORT}`));
