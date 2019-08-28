const pathModule = require('path');
const fs = require('fs');
const markdownIt = require('markdown-it')();

module.exports = (path) => {
    const pathFile = pathModule.basename(path)
    console.log(pathFile)
    fs.readFile(path, (err, data) => {
        if (!err) {
            const dataStr = data.toString();
            const tokens = markdownIt.parse(dataStr, {})
            console.log(tokens[1])
        }
        if (err) throw err;
        console.log(data)
    })


};