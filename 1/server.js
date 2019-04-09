var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello <b>HTML</b>!');
    res.end();
});
server.listen(8000);
console.log("server jalan di http://localhost:8000");