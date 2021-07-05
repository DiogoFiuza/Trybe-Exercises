// Exercício 1. 
// Verifica se palavra é um palindromo

// Opção 1
// let palavra = "arara";

// function palindromo(palavra){
//   if (palavra === palavra.split('').reverse().join('')){
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromo(palavra))


// Opção 2
function palindrome(word){
  for(let index in word){
    if(word[index] != word[(word.length -1) - index]){
      return false
    }
  }
  return true
}

console.log(palindrome("osso"))