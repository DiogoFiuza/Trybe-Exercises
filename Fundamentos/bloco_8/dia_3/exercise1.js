const assert = require('assert');
const books = require('./module');

// Adicione o código do exercício aqui:
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);