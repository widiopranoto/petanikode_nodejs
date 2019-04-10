var fs = require('fs');

fs.rename('fileBaru.txt', 'fileBaruRename.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
}); 