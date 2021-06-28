
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
//  Percorrer o array numbers e imprimir com console.log()

for(let num of numbers){
  console.log(num);
}

// Exercício 2
// Somar todos os valores do array e mostrar o resultado
let soma = 0;
for(let i = 0; i < numbers.length; i++){
  soma += numbers[i];
}
console.log("A soma dos valores é igual a " + soma);

//Exercício 3
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;
 media = soma / numbers.length;
 console.log("A média dos valores é igual a " + media);

//Exercício 4
//Verificar se o valor é maior que 28
if(media < 20){
  console.log("valor maior que 20");
}else if(media > 20){
  console.log("valor menor ou igual a 20");
}

// Exercício 5 
// Descubra qual o maior valor contido no array e imprima-o
let maior = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > maior){
    maior = numbers[i]
  }
}
 console.log("O maior número é " + maior);

// Exercício 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 != 0){
    impar++
  }
}
console.log("Foram encontrados " + impar + " números ímpares");

// Exercício 7
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 100;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] < menor){
    menor = numbers[i]
  }
}
 console.log("O menor número é " + menor);

// Exercício 8
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let vetor = [];
for(let i = 0; i <= 25; i++){
  vetor.push(i);
}
console.log(vetor);

// Exercício 9
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

for(let i = 0; i < vetor.length; i++){
  console.log(vetor[i]/2);
}