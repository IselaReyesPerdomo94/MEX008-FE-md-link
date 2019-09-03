//Getting markdownit library 
const markdownIt = require('markdown-it');
const md = markdownIt();

/*This function receives data from a promise in index.js (readFile) only if resolves.
md.parse(data) returns tokens from the file and then will filter the tokens to only returns the tokens
that are links with their respective properties.
*/

const analize = (data, finalPath) => {
    const mdData = md.parseInline(data);
    const tokens = mdData[0].children;
    const filteredLinkTokens = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === 'link_open') {
            filteredLinkTokens.push({
                href: tokens[i].attrs[0][1],
                text: tokens[i + 1].content,
                path: finalPath
            })
        }
    }
    //console.log(filteredLinkTokens)
    return filteredLinkTokens;
}

module.exports = analize;