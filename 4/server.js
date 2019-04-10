var http = require('http');
var server = http.createServer(function (request, response) {
    response.end("Selamat datang di nodejs");
});
server.listen(8000);
console.log("server jalan di http://localhost:8000");