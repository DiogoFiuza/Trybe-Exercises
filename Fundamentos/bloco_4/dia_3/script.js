// Exercício do Bloco 4 dia 3 : Lógica de programação

// Exercício 1
// Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

// let n = 5;

// for ( let i = 0; i < n; i++){
//   let linha = "";
//   for( let j = 0; j < n; j++){
//     linha += "*"
//   }
//   console.log(linha);
// }

// Exercício 2
// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

// let n = 5;
// let linha = "";

// for ( let i = 0; i < n; i++){
//   linha += "*"
//   console.log(linha);
// }

// Exercício 3 
// Agora inverta o lado do triângulo.

//  let number = 5;

//  for(let i = 0; i < number ; i++){
//     let palavra = " ";
//     let asteriscos = number - i;

//    for(let j = 0; j < number; j++){
//       if(palavra.length < asteriscos){
//        palavra += " ";
//       } else {
//        palavra += "*";
//       }
//     } 
//    console.log(palavra);
//   }

// Exercício 4
// Depois, faça uma pirâmide com n asteriscos de base

let n = 5;

for (let index = (n-1); index >= 0; index -= 2) {
  linha = '';
  for(let i = 1; i <= index; i +=2){
    linha += ' ';
  }
  for (let i = index; i < n; i += 1 ) {
    linha += '*';
  } 
  console.log(linha);
} 