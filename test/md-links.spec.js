const mdLinks = require('../index.js');
const isMarkdown = require('../lib/md.js');
const readFile = require('../lib/readfile.js');
const analize = require('../lib/analize.js');;

const MOCKMD = '# Prueba de mdlinksirp [github](https://github.com)'; //1 solo link
const MOCKMDLINKS = '# Todo va a estar bien, [github](https://github.com), [google](https://google.com)'

//Función principal
describe('mdLinks', () => {
    it('should be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });
    it('should console No se encontró archivo MD', () => {
        expect(mdLinks('../mockfiles/text.txt')).toBe('No se encontró archivo MD');
    });

});

//Función isMarkdown
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

//Función readFile
describe('readFile', () => {
    it('should be a function', () => {
        expect(typeof readFile).toBe('function');
    });
    it('should return string', () => {
        return readFile('./mockfiles/prueba.md').then(value => {
            expect(typeof value).toBe("string");
        })
    });
    it('if file does not exists should, return an Error', () => {
        return readFile('./mockfiles/prueba2.md').catch(error => {
            expect(error).toBe("ENOENT: no such file or directory, open 'C:\\Users\\Isela Reyes\\Documents\\Prog Básica\\Laboratoria\\mdlinks\\MEX008-FE-md-link\\mockfiles\\prueba2.md'")
        })
    });
});

//Función analize
describe('analize', () => {
    it('should be a function', () => {
        expect(typeof analize).toBe('function');
    });
    it('should return an empty array if receives an empty file or without links', () => {
        expect(analize('Hello', './mockfiles/mdvacio.md')).toEqual([]);
    });
    it('should return 1 when analize, receives a file with just one link', () => {
        expect(analize(MOCKMD, './mockfiles/prueba.md').length).toBe(1)
    });
    it('should return 2 when analize receives a file that has text and two links', () => {
        expect(analize(MOCKMDLINKS, './mockfiles/linksandtext.md').length).toBe(2)
    });
});