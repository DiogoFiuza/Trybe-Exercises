// Exercício 1
// Imprima no console uma mensagem de boas-vindas para a personagem

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Olá, " + info["personagem"] + "!")
// Exercício
// nsira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = 'Sim';

console.log(info)

// Exercício 3
// Faça um for/in que mostre todas as chaves do objeto.

for(let objects in info){
  console.log(objects)
}
console.log("")
// Exercício 4
// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto

for(let objects in info){
  console.log(info[objects])
}

console.log("")
// Exercício 5
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let infos = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log(info.personagem + " e " + infos.personagem)
console.log(info.origem + " e " + infos.origem)
console.log(info.nota +  " e " + infos.nota)
console.log(info.recorrente + " e " + info.recorrente)
