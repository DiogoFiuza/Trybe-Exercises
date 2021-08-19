const { it, expect } = require('@jest/globals');
const { getUserName, users } = require('../src/exercise2');

describe('Valida o resolve da função getUserName()', () => {
  it('Resolve', () => (
    getUserName(1).then((user) => {
      expect(user).toEqual('Mark')
    })
  ))
})

describe('Valida o reject da função getUserName()', () => {
  it('Reject', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => (
      expect(error.message).toMatch(`User with 3 not found.`)
    ))
  })
})

