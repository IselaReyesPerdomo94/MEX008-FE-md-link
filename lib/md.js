const pathModule = require('path');

const isMarkdown = (path) => {
    if(pathModule.extname(path) === '.md'){
        return true;
    }else{
        return false;
    }
}

module.exports = isMarkdown;