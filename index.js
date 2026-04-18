const http = require("http");

const host = "0.0.0.0";
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <h1>Hola mundo de Eury en DevOps</h1>
    <p>Aplicación desplegada con GitHub Actions, Docker Hub y Render.</p>
  `);
});

server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
