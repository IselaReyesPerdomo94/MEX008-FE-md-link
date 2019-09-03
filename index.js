const isMarkdown = require('./lib/md.js');
const readFile = require('./lib/readfile.js');
const analize = require('./lib/analize.js');
const limitArgsCli = require('./lib/args.js')

module.exports = (path, options) => {
    if (path == null) {
        console.log('Necesitas agregar una ruta a un archivo MD')
        return;
    }
    if (isMarkdown(path) === false) {
        console.log('No se encontró archivo MD')
        return `No se encontró archivo MD`;
    }
    readFile(path)
        .then(data => {
            if (data === '') {
                console.log('El archivo esta vacío')
                return `El archivo esta vacío`;
            }
            const linksWithoutOptions = analize(data, path)
            console.log(linksWithoutOptions)
        })
        .catch(error => console.log(error))
};