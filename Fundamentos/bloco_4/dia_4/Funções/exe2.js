// Exercício 2
// Mostra a posição do maior número

let numbers = [2, 3, 6, 7, 10, 1];
let maior = 0;

function verificaMaior(n){
  for(let index in n){
    if(n[maior] < n[index]){
      maior = index;
    }
  }
  return maior;
}
console.log(verificaMaior(numbers))






