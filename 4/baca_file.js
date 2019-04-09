var fs = require('fs');
fs.open('fileBaru.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log("Tersimpan!");
});