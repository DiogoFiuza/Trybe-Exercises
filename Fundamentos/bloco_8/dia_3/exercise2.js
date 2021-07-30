const assert = require('assert');
const books = require('./module');

// Adicione o código do exercício aqui:
const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
 const authorData = books.map((book) => ({['age']: book.releaseYear - book.author.birthYear, ['author']: book.author.name}))
 return authorData.sort((a,b) => (a.age - b.age))
}

assert.deepStrictEqual(nameAndAge(), expectedResult);