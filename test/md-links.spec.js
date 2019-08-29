const mdLinks = require('../index.js');
const isMarkdown = require('../lib/md.js');


describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
 it('should console No se encontró archivo MD', () => {
    expect(mdLinks('../mockfiles/text.txt')).toBe('No se encontró archivo MD');
  });

});


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
