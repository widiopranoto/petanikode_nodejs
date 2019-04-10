var fs = require('fs');

//buat file
fs.appendFile('fileBaru.txt', 'Hello dari widio!', function (err) {
    if (err) throw err;
    console.log("Tersimpan");
});