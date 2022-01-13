const { expect } = require('chai');

const numberType = require('./index');

describe('Verificando número', () => {
  it('Positivo', () => {
    const result = numberType(4);

    expect(result).to.be.equal('positivo')
  })

  it('Negativo', () => {
    const result = numberType(-6);

    expect(result).to.be.equal('negativo')
  })

  it('Neutro', () => {
    const result = numberType(0);

    expect(result).to.be.equal('neutro')
  })
});

describe('Valor tipo number', () => {
  it('Digite um valor do tipo number', () => {
    const result = numberType('0');

    expect(result).to.be.equal('o valor deve ser um número');
  })
})