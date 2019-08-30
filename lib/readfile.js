const fs = require('fs');

const readFile = path => {
    fs.readFile(path, 'utf8', (error, data)=>{
        if(err) throw err;
        return data;
    })
}

module.exports = readFile;