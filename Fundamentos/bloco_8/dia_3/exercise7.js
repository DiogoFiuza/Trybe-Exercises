const assert = require('assert');
const books = require('./module');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() { 
  
  return books.filter((value) => value.author.name.includes('.')).find((element, i) =>{ 
    let counter = 0;
    for (let index = 0; index < element.author.name.length; index += 1) {
      if (element.author.name[i] === '.') {
        counter += 1
      }
    }
    if (counter > 2) {
      return true;
    }
  }).name 
} 

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);