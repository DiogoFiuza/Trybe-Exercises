const { expect } = require("@jest/globals")
const { uppercase } = require('../src/exercise1');

describe('Função uppercase', () => {
  it('Valida o resultado', (done) => {
    uppercase('diogo', (result) =>{
      try {
        expect(result).toMatch('DIOGO')
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})