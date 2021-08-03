// Exercício 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
// 1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const expected = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected, [1, 2, 4], 'Resultado incorreto!');

// 2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Resultado incorreto!');

// 3 Verifique se o array passado por parâmetro não sofreu alterações
assert.ok(expected === [1, 2, 3, 4], 'O valor sofreu alteração');

// 4

