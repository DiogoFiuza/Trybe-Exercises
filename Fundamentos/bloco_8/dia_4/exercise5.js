const books = require("./module");
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, cur) => acc += cur).toLowerCase().split('')
  .reduce((acc,cur) => (cur === 'a'? acc+=1: acc), 0)
}

assert.deepStrictEqual(containsA(), 20);