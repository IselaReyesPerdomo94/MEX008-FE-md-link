const isMarkdown = require('./lib/md.js');
const readFile = require('./lib/readfile.js');
const analize = require('./lib/analize.js');
const statsFunction = require('./lib/stats.js');
const validateFunction = require('./lib/validate.js');
const stAndValFunction = require('./lib/statsandvalidate.js');

module.exports = (path, { validate, stats }) => {
    if (!path) {
        console.log('Necesitas agregar una ruta a un archivo MD');
        return 'Necesitas agregar una ruta a un archivo MD';
    }
    if (isMarkdown(path) == false) {
        console.log('No se encontró archivo MD');
        return 'No se encontró archivo MD';
    }
        
    return readFile(path)
        .then(async data => {
            const linksWithoutOptions = analize(data, path);
            if (data === '') {
                console.log('El archivo esta vacío');
                return 'El archivo esta vacío';
            } else if (validate && stats) {
                const validatedLinks = await validateFunction(linksWithoutOptions);
                const statsValidated = await stAndValFunction(validatedLinks);
                console.log(statsValidated);
                return statsValidated;
            } else if (stats) {
                const statsLinks = statsFunction(linksWithoutOptions);
                console.log(statsLinks);
                return statsLinks;
            } else if (validate) {
                const validatedLinks = await validateFunction(linksWithoutOptions);
                console.log(validatedLinks);
                return validatedLinks;
            }
            console.log(linksWithoutOptions);
            return linksWithoutOptions;
        });
};