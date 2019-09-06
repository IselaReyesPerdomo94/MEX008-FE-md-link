const fs = require('fs');
/*This function receives a path and return a promise resolved o rejected according to readFile
 if is resolved will get to manipulate the read value from the file
 or if is rejected will get the error.
*/
const readFile = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            err ? reject(err.message) : resolve(data);
        });
    });
};
module.exports = readFile;