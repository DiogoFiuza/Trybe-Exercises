const sortiado = () => Math.round(Math.random()*5);


const sorteio = (n1, sortiado) => {
  
  if(n1 === sortiado){
    return `${sortiado} Parabéns você ganhou`;
  }
  return `${sortiado} Tente novamente`;
}

console.log(sorteio(3, sortiado()))