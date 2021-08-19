const { it, expect } = require('@jest/globals');
const { getUserName, users } = require('../src/exercise2');

describe('Valida resultado da getUserName()', () => {
  it('Verifica usuário', () => (
    getUserName(1).then((user) => {
      expect(user).toEqual('Mark')
    })
  ))
})

