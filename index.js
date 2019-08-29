const pathModule = require('path');
const fs = require('fs');
const markdownIt = require('markdown-it')();
const isMarkdown = require('./lib/md.js');

module.exports = (path) => {
    if(isMarkdown(path) === false){
        return `No se encontró archivo MD`;
    }

    
};