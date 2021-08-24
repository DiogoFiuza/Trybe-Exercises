const { it, expect } = require('@jest/globals');
const { getUserName, users } = require('../src/exercise2');

describe('Valida o resolve da função getUserName()', () => {
  it('Resolve',  async () => (
    await getUserName(1).then((user) => {
      expect(user).toEqual('Mark')
    })
  ))
})

describe('Valida o reject da função getUserName()', () => {
  it('Reject', async () => {
    expect.assertions(1);
  try {
    await getUserName(3)
  } catch (error) {
     expect(error.message).toEqual(`User with 3 not found.`)
  }
  })
})
