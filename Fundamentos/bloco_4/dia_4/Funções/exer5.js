// Exercício 5
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numbers = [2, 3, 2, 5, 8, 2, 3]; 

function repeatNumber(n){
  let num = 0;
  for (let index in n) {
    for (let index2 in n) {
      if (n[index] === n[index2]) {
        num = n
        
      }
    }
  }
  return num
}

console.log(repeatNumber(numbers))