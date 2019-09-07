const mdLinks = require('../index.js');
const isMarkdown = require('../lib/md.js');
const readFile = require('../lib/readfile.js');
const analize = require('../lib/analize.js');
const stats = require('../lib/stats.js');
const validate = require('../lib/validate.js');
const statsAndValidate = require('../lib/statsandvalidate.js');

const MOCKMD = '# Prueba de mdlinksirp [github](https://github.com)'; //1 solo link
const MOCKMDLINKS = '# Todo va a estar bien, [github](https://github.com), [google](https://google.com)';
const MOCKARRAYFORSTATS = [
    { href: 'https://github.com', text: 'Controlador de versiones', path: '/README.md' },
    { href: 'https://github.com', text: 'Github', path: '/README.md' },
    { href: 'https://google.com', text: 'Google es el mejor', path: '/README.md' }
];

const MOCKARRAYFORVALIDATE = [
    { href: 'https://githuuhuhub.com', text: 'Github', path: '/README.md' },
    { href: 'https://google.com', text: 'Google es el mejor', path: '/README.md' }
];

//Principal function
describe('mdLinks', () => {
    it('should be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });
    it('should console log a message if did not find a md file', () => {
        expect(mdLinks('../mockfiles/text.txt', { validate: false, stats: false })).toBe('No se encontró archivo MD');
    });
    it('should log a message if user did not pass a route', () => {
        expect(mdLinks(null, { validate: false, stats: false })).toBe('Necesitas agregar una ruta a un archivo MD');
    });
    it('should log a message if user pass an empty md file', () => {
        expect(mdLinks('./mockfiles/mdvacio.md', { validate: false, stats: false })).resolves.toBe('El archivo esta vacío');
    });
    it('should log an array if user pass a route to a MD file', () => {
        expect(mdLinks('./mockfiles/prueba.md', { validate: false, stats: false })).resolves.toEqual([{
            href: 'https://github.com',
            text: 'github',
            path: './mockfiles/prueba.md'
        }]);
    });
    it('should log an array if user pass a route to a MD file with href, text, path and Status', () => {
        expect(mdLinks('./mockfiles/prueba.md', { validate: true, stats: false })).resolves.toEqual([{
            href: 'https://github.com',
            text: 'github',
            path: './mockfiles/prueba.md',
            status: 'OK'
        }]);
    });
    it('should return Total: 1, Unique: 1', ()=> {
        expect(mdLinks('./mockfiles/prueba.md', { validate: false, stats: true })).resolves.toBe('Total: 1 \nUnique: 1');
    });
    it('should return Total: 1, Unique: 1, Broken: 0', ()=> {
        expect(mdLinks('./mockfiles/prueba.md', { validate: true, stats: true })).resolves.toBe('Total: 1 \nUnique: 1\nBroken: 0');
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
        expect(stats(MOCKARRAYFORSTATS)).toBe('Total: 3 \nUnique: 2');
    });
});

//validate
describe('validate', () => {
    it('should be a function', () => {
        expect(typeof validate).toBe('function');
    });
    it('Should return FAIL to one link', ()=> {
        return validate(MOCKARRAYFORVALIDATE).then(array => {
            expect(array[0].status).toBe('FAIL');
        });
    });
    it('Should return OK to one link', ()=> {
        return validate(MOCKARRAYFORVALIDATE).then(array => {
            expect(array[1].status).toBe('OK');
        });
    });
});

//statsAndValidate
describe('statsAndValidate', () => {
    it('should be a function', () => {
        expect(typeof statsAndValidate).toBe('function');
    });
    it('should return Total: 1 Unique: 1 Broken: 0', () => {
        expect(statsAndValidate(MOCKARRAYFORSTATS)).toBe('Total: 3 \nUnique: 2\nBroken: 0');
    });
});