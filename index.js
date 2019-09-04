const isMarkdown = require('./lib/md.js');
const readFile = require('./lib/readfile.js');
const analize = require('./lib/analize.js');
const limitArgsCli = require('./lib/args.js');
const statsFunction = require('./lib/stats.js');

module.exports = (path, {validate, stats}) => {
    if (path == null) {
        console.log('Necesitas agregar una ruta a un archivo MD');
        return `Necesitas agregar una ruta a un archivo MD`;
    }
    if (isMarkdown(path) === false) {
        console.log('No se encontró archivo MD')
        return `No se encontró archivo MD`;
    }
    if (path) {
        return readFile(path)
            .then(data => {
                if (data === '') {
                    console.log('El archivo esta vacío')
                    return `El archivo esta vacío`;
                }
                const linksWithoutOptions = analize(data, path)
                if(stats){
                    console.log(statsFunction(linksWithoutOptions))
                    return statsFunction(linksWithoutOptions)
                }
                console.log(linksWithoutOptions)
                return linksWithoutOptions;
            })
            .catch(error => console.log(error))
    }

};