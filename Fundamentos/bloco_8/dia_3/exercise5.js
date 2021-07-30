const assert = require('assert');
const books = require('./module');

// Adicione o código do exercício aqui:
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const names = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  return names.map((book) => book.author.name).sort()
}
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);