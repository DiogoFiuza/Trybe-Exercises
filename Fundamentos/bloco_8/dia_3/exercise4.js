const assert = require('assert');
const books = require('./module');

// Adicione o código do exercício aqui:

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  // escreva seu código aqui
  const moreOldBooks = books.filter((book) => (2021 - book.releaseYear) > 60)
  return moreOldBooks.sort((a,b) => a.releaseYear - b.releaseYear)
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);