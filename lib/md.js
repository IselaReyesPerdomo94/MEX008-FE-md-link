const pathModule = require('path');
const isMarkdown = (path) => {
    const result = pathModule.extname(path) === '.md' ? true : false;
    return result;
};
module.exports = isMarkdown;