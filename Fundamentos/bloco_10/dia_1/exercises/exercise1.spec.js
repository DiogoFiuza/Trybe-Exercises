const { expect, test, describe } = require("@jest/globals");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// test part 1
describe("Exercíse 1", () => {
  test("Valida soma entre 4 e 5",() => {expect(sum(4,5)).toBe(9)})

  test('Valida soma entre 0 e 0', () => {expect(sum(0,0)).toEqual(0)})

  test('Valida o retorno de erro quando receber string', () => 
  {expect(() => { sum(4,'5') }).toThrow()})

  test('Valida a menssagem de erro quando receber string', () => 
  {expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'))})

})



