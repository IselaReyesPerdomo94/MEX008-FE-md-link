const pathModule = require('path');

const isMarkdown = (path) => {
    pathModule.extname(path) === '.md' ? true: false;
};

module.exports = isMarkdown;