const books = require("./module");
const assert = require('assert');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, cur) => {
   if(acc.name.length < cur.name.length) {
    return  cur;
   }
  return acc;
  })
}
assert.deepStrictEqual(longestNamedBook(), expectedResult);