var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(request.url, true).query;
    var txt = 'Kata kunci: ' + q.keyword;
    response.end(txt);
});
server.listen(8000);
console.log("server jalan di http://localhost:8000");