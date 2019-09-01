const markdownIt = require('markdown-it')();
const md = new markdownIt();

const analize = data => {
    md.parse(data);

}