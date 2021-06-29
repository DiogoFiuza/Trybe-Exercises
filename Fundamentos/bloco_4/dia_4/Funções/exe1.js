// Exercício 1. 
// Verifica se palavra é um palindromo

let palavra = "arara";

function palindromo(palavra){
  if (palavra === palavra.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
}
console.log(palindromo(palavra))