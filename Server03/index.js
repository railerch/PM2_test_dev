const http = require("http");
const url = require("url");
let port = 8000;
const server = http.createServer((req, res) => {
    res.end(`PM2 - NODE.JS Server 03 on port:${port}`);
    console.log(`PM2 - NODE.JS Server 03 on port:${port}`);
});

server.listen(port);
console.log("Server 03");