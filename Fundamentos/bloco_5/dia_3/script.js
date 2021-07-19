function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function createDays(){
  let dates = document.querySelector('#days')

  for(let index in dezDaysList){
    let date = document.createElement('li')
    day = dezDaysList[index]
    date.innerHTML = day
    dates.appendChild(date)

    if(date.innerHTML == 24 || date.innerHTML  == 31 ){
      date.className = 'day holiday'
    } else if(date.innerHTML == 4 || date.innerHTML == 11 || date.innerHTML == 18){
      date.className = 'day friday'
    }else if(date.innerHTML == 25){
      date.className = 'day friday holiday'
    }else{
      date.className = 'day'
    }
  }
  
}
createDays()

// Exercício 2
function holidayButton(name){
  let button = document.createElement('button')
  let divButton = document.querySelector(".buttons-container")
  button.id = "btn-holiday"

  divButton.appendChild(button)
  button.innerHTML = name
}
holidayButton('Feriados')

// Exercício 3
  button = document.querySelector("#btn-holiday")
  button.addEventListener('click', function(){
    let getHoliday = document.querySelectorAll('.holiday')
    for(let index of getHoliday) {
      if(index.style.backgroundColor == "green") {
        index.style.backgroundColor = "rgb(238,238,238)";
      } else {
        index.style.backgroundColor = "green";
      }
    }
  })

// Exercício 4
function fridayButton(name){
  let button = document.createElement('button')
  let divButton = document.querySelector(".buttons-container")
  button.id = "btn-friday"

  divButton.appendChild(button)
  button.innerHTML = name
}
fridayButton('Sexta-feiras')


// Exercício 5
function nameFriday(name){
  document.querySelector("#btn-friday").addEventListener('click', function(){;
    let getFriday = document.querySelectorAll('.friday')

    for(let index of getFriday) {
      if(index.innerText == name) {
        index.innerText = parseInt(index.nextElementSibling.innerText - 1);
      } else {
        index.innerText = name;
      }
    }
  })
}
nameFriday("Sextou!!")

// Exercicio 6
function dayZoom (){
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
    
    event.target.style.fontSize ='30px'
  })
}

function dayZoomOut (){
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    
    event.target.style.fontSize = '20px'
  })
}
dayZoom()
dayZoomOut()

// Exercicio 7


