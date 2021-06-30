// Exercício 4
// retorna o nome com maior número de caracteres

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// Opção 1
// Utilizando for/of
function biggerName (nomes){
  let bigName = " ";
  for (let index of nomes) {
    if(index.length > bigName.length){
      bigName = index
    }
  }
  r
  
}
console.log(biggerName(names))

//Opção 2
// Utilizando for/in
function maiorName (nomes){
  let bigName = " ";
  for(let index in nomes){
    if(nomes[index].length > bigName.length){
      bigName = nomes[index]
    }
  }
  return bigName
}

console.log(maiorName(names))