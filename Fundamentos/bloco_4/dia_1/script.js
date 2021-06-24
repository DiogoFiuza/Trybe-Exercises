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
      console.log("zero");
}
// Exercício 5
/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. */
let angulo1 = 60;
let angulo2 = 50;
let angulo3 = 70;
let somaDosAngulos = (angulo1+angulo2+angulo3);

if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
  console.log("Erro no valor do ângulo")
}else{
  if(somaDosAngulos != 180 || somaDosAngulos < 0){
    console.log("false");
  }else{
    console.log("true")
  }
}
// Exercício 6
// Mostrar o movimento da peça de xadres indicada
let pecaDeXadrex = "peão";

switch(pecaDeXadrex){
  case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
  case "rainha":
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;
  case "bispo":
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
    break;
  case "cavalo":
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
  case "torre";
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
    break;
  case "peão"
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    break;
  default:
    onsole.log("Peça inválida!");
}


// Exercício 7
// Converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F
let porcentagem = 80;

if(porcentagem >= 90 && porcentagem < 100){
  console.log("A"); 
}else if(Porcentagem >= 80 ){
  console.log("B");
}else if(Porcentagem >= 70){
  console.log("C");
}else if(Porcentagem >= 60){
  console.log("D");
}else if(Porcentagem >= 50){
  console.log("E");
}else if(Porcentagem < 50 && porcentagem > 0){
  console.log("F");
}else{
  console.log("ERRO");
}