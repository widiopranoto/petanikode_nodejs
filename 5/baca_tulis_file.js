var fs = require('fs');

fs.open('fileBaru.txt', 'w+', function (err, file) {
    if (err) throw err;
    //konten yg akan ditulis ke file
    let content = "Hello widio!";
    //tulis konten ke file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Tersimpan');
    });
    //baca file
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });
});