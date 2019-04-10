var http = require('http');
var qs = require('querystring');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    if (request.url === "/login/" && request.method === "GET") {
        // tampilkan form login
        fs.readFile("login.html", (err, data) => {
            if (err) { // kirim balasan error
                response.writeHead(404, { 'Content-Type': 'text/html' });
                return response.end("404 Not Found");
            }
            // kirim form login_form.html
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            return response.end();
        });
    }

    if (request.url === "/login/" && request.method === "POST") {
        // ambil data dari form dan proses
        var requestBody = '';
        request.on('data', function (data) {
            // tangkap data dari form
            requestBody += data;

            // kirim balasan jika datanya terlalu besar
            if (requestBody.length > 1e7) {
                response.writeHead(413, 'Request Entity Too Large', { 'Content-Type': 'text/html' });
                response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
            }
        });

        // kita sudah dapat datanya
        // langkah berikutnya tinggal di-parse
        request.on('end', function () {
            var formData = qs.parse(requestBody);

            // cek login
            if (formData.username === "petanikode" && formData.password === "kopi") {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write('<h2>Selamat datang bos!</h2> ');
                response.write('<p>username: ' + formData.username + '</p>');
                response.write('<p>password: ' + formData.password + '</p>');
                response.write("<a href='/login/'>kembali</a>");
                response.end();
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write('<h2>Login Gagal!</h2> ');
                response.write("<a href='/login/'>coba lagi</a>");
                response.end();
            }

        });
    }

});
server.listen(8000);

console.log('server is running on http://localhost:8000');