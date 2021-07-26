// Parte 2
// Exercício 1
function fatorial(number){
  let result = 1;
  for(let index = number; index > 0 ; index-= 1){
    result = result * index;
  }
  return result;
}
console.log(fatorial(5));