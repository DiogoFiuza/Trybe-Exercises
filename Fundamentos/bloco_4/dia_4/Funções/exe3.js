// Exercício 3
// ostra a posição do menor número

let numbers = [2, 4, 6, 7, 10, 0, -3];;
let menor = 0;

function verificaMenor(n){
  for(let index in n){
    if(n[menor] > n[index]){
      menor = index;
    }
  }
  return menor;
}
console.log(verificaMenor(numbers))