const books = require('./module');
const assert = require('assert');


const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   return books.reduce((acc, curr) => acc + curr.author.name + ', ', '' ).slice(books[-1],-2) + '.'
// } 

function reduceNames() {
  return books.reduce((acc, cur, i, arr) => {
    if(i === arr.length -1) {
      return `${acc}${cur.author.name}.`
    } else {
      return `${acc}${cur.author.name}, `
    }
  }, '')
}

assert.strictEqual(reduceNames(), expectedResult);