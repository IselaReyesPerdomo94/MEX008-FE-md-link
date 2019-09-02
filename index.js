//const markdownIt = require('markdown-it')();
const isMarkdown = require('./lib/md.js');
const readFile = require('./lib/readfile.js');
const analize = require('./lib/analize.js');


module.exports = path => {
    const finalPath = process.argv[2] || path;
    const option1 = process.argv[3]
    if (isMarkdown(finalPath) === false) {
        console.log('No se encontró archivo MD')
        return `No se encontró archivo MD`;
    }
    const textInFile = readFile(finalPath);
    textInFile
        .then(data => {
            if (data === '') {
                console.log('El archivo esta vacío')
                return `El archivo esta vacío`;
            }
            analize(data, finalPath)
        })
        .catch(error => console.log(error))
};