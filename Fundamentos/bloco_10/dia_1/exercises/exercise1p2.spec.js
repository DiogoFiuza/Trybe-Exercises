const { expect, test } = require("@jest/globals");

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Part 2
describe('Exercício 1 - part 2', () => {
  test('Verifica se myRemove([1, 2, 3, 4], 3) retorna o valor esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  test('Verifique se a myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])})

  test('Verifique se o array passado, não sofreu alteração', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna', () => {
    expect(myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4])
  })
})
