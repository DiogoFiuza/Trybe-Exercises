 let a = 2;
 let b = 10;
 let c = 3;


// Exercício 1 
// Fazer as operações aritiméticas básicas

 // Adição
console.log(a+b);
// Subtração
console.log(a-b);
// Multiplicação
console.log(a*b);
// Divisão
console.log(a/b);
// Módulo
console.log(a%b);

// Exercício 2
// Apresentar o maior dos dois números

if(a > b){
  console.log(a);
}else{
  console.log(b);
}

// Exercício 3
// Retorna o maior dos 3 números declarados

if(a > b && a > C){
  console.log(a);
}else if(b > c){
  console.log(b);
}else{
  console.log(c)
}

// Exercício 4
// Retornando se o valor é positivou ou negativo
const valor = -2;
switch(valor > 0){
    case true: 
      console.log("negative");
      break;
    case false:
      console.log("positive");
      break;
    default:
      console.log("erro");
}
// Exercício 5
// 