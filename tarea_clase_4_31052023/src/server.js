const http = require('http');
const PORT = 3008;
const HOST = "localhost";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
      res.end("<h1>Bienvenides a nuestra web</h1>");
  } else if (url.pathname === "/cursos") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
      res.end("<h1>Bienvenidas a nuestra sección cursos</h1>");
  } else if (url.pathname === "/contacto") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
      res.end("<h1>Bienvenidas a nuestra sección de contacto</h1>");
  } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf8" });
      res.end(`${http.STATUS_CODES[404]} - URL Erronea`);
  }
  });

server.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutandose en http://${HOST}:${PORT}`);
});