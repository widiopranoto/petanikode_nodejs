var fs = require('fs');

fs.unlink('fileLain.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
}); 