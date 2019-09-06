const mdLinks = require('../index.js');
const isMarkdown = require('../lib/md.js');
const readFile = require('../lib/readfile.js');
const analize = require('../lib/analize.js');
const stats = require('../lib/stats.js');

const MOCKMD = '# Prueba de mdlinksirp [github](https://github.com)'; //1 solo link
const MOCKMDLINKS = '# Todo va a estar bien, [github](https://github.com), [google](https://google.com)';
const MOCKARRAYFORSTATS = [
    { href: 'https://github.com', text: 'Controlador de versiones', path: '/README.md' },
    { href: 'https://github.com', text: 'Github', path: '/README.md' },
    { href: 'https://google.com', text: 'Google es el mejor', path: '/README.md' }
];

//Principal function
describe('mdLinks', () => {
    it('should be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });
    it('should console log a message if did not find a md file', () => {
        expect(mdLinks('../mockfiles/text.txt', { validate: null, stats: null })).toBe('No se encontró archivo MD');
    });
    it('should log a message if user did not pass a route', () => {
        expect(mdLinks(null, { validate: null, stats: null })).toBe('Necesitas agregar una ruta a un archivo MD');
    });
    it('should log a message if user pass an empty md file', () => {
        expect(mdLinks('./mockfiles/mdvacio.md', { validate: null, stats: null })).resolves.toBe('El archivo esta vacío');
    });

    it('should log an array if user pass a route to a MD file', () => {
        expect(mdLinks('./mockfiles/prueba.md', { validate: null, stats: null })).resolves.toEqual([{
            href: 'https://github.com',
            text: 'github',
            path: './mockfiles/prueba.md'
        }]);
    });
});

//isMarkdown function
describe('isMarkdown', () => {
    it('should be a function', () => {
        expect(typeof isMarkdown).toBe('function');
    });
    it('if is MD, should return true', () => {
        expect(isMarkdown('../mockfiles/prueba.md')).toBe(true);
    });
    it('if is not MD, should return false', () => {
        expect(isMarkdown('../mockfiles/text.txt')).toBe(false);
    });
});

//readFile function
describe('readFile', () => {
    it('should be a function', () => {
        expect(typeof readFile).toBe('function');
    });
    it('should return string', () => {
        return readFile('./mockfiles/prueba.md').then(value => {
            expect(typeof value).toBe('string');
        });
    });
    it('if file does not exists should, return an Error', () => {
        return readFile('./mockfiles/prueba2.md').catch(error => {
            expect(error).toBe('ENOENT: no such file or directory, open \'C:\\Users\\Isela Reyes\\Documents\\Prog Básica\\Laboratoria\\mdlinks\\MEX008-FE-md-link\\mockfiles\\prueba2.md\'');
        });
    });
});

//analize function
describe('analize', () => {
    it('should be a function', () => {
        expect(typeof analize).toBe('function');
    });
    it('should return an empty array if receives an empty file or without links', () => {
        expect(analize('Hello', './mockfiles/mdvacio.md')).toEqual([]);
    });
    it('should return 1 when analize, receives a file with just one link', () => {
        expect(analize(MOCKMD, './mockfiles/prueba.md').length).toBe(1);
    });
    it('should return 2 when analize receives a file that has text and two links', () => {
        expect(analize(MOCKMDLINKS, './mockfiles/linksandtext.md').length).toBe(2);
    });
});

//stats function
describe('stats', () => {
    it('should be a function', () => {
        expect(typeof stats).toBe('function');
    });
    it('should return the total of links and total of unique links too', () => {
        expect(stats(MOCKARRAYFORSTATS)).toBe('Total: 3 \nUnique: 2.');
    });
});