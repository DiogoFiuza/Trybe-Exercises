// // apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const createParagraph = (element) => {
  const container = document.querySelector('#jokeContainer');
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = element;
  container.appendChild(newParagraph);
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject) 
    .then(response => response.json())
    .then(({ joke }) => createParagraph(joke));
};

const division = [2,3,5,10];
const newPromisse = new Promise((resolve, reject) => {
  let value = [];
  for(let size = 0 ; size < 10; size += 1) {
    let num = (Math.floor(Math.random() * 50) + 1);
    value.push(num * num);
  }

  const total = value.reduce((acc, cur) => acc + cur);
  console.log(value)
  console.log(total);
  
  (total < 8000) ? resolve(total) : reject()

}).then((total) => division.map((num)=> (total/num)))
  .then( array => console.log(array.reduce((acc, cur) => acc + cur,0)))
  .catch(() => 
  console.log( "É mais de oito mil! Essa promise deve estar quebrada!"));

// window.onload = () => fetchJoke();