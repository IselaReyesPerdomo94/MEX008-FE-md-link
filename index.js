const path = require('path');
const fs = require('fs');
const markdownIt = require('markdown-it');
const md = new markdownIt();

module.exports = (path, options) => {
    console.log(path.win32.basename(path));
    console.log('si funciona')

    //should identify if path is a file or a dir. maybe i will use file.readFile || file.readdir
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        console.log(data)
    })

    //should identify wich file is a markdown file. Maybe will use markdownIt || 

    //should return a promise that resolves an array of objects
    //return 
};