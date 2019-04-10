var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var q = url.parse(request.url, true);
    var filename = "." + q.pathname;
    //baca file
    fs.readFile(filename, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 tidak ketemu");
        }
        //kirim balasan dengan file statis
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();
    });
});
server.listen(8000);
console.log("server jalan di http://localhost:8000");