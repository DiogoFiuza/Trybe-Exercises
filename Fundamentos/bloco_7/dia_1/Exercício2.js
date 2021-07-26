// Parte 2
// Exercício 1
const fatorial = number => {
  let result = 1;
  for(let index = number; index > 0 ; index-= 1){
    result *= index;
  }
  return result;
}
console.log(fatorial(5));


// Exxercício 2
const biggerWord = phrase => {
  let words = phrase.split(' ');
  let sizeWord = 0;
  let result = '';

  for(let index of words){
    if(index.length > sizeWord){
      result = index;
      sizeWord = index.length;
    }
  }return result;
}

console.log(biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu"))