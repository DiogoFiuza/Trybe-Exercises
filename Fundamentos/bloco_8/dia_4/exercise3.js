const books = require("./module");
const assert = require('assert');


const expectedResult = 43;

function averageAge() {
  const middleYears = books.reduce((acc, cur, i) => acc + (cur.releaseYear - cur.author.birthYear), 0)
  return middleYears/ books.length;
}

assert.strictEqual(averageAge(), expectedResult);