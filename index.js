//const markdownIt = require('markdown-it')();
const isMarkdown = require('./lib/md.js');
const readFile = require('./lib/readfile.js');

module.exports = (path) => {
    if (isMarkdown(path) === false) {
        return `No se encontró archivo MD`;
    }
    if (readFile(path) === '') {
        return `El archivo MD está vacío`;
    }


};