var fs = require('fs');

fs.readFile('TestFile.txt', "utf-8",function(err, data) {
    if (err) {
        throw err;
    }

    console.log(data);
});


// var fs = require('fs');

// var data = fs.readFileSync('TestFile.txt', 'utf-8');

// console.log(data);
