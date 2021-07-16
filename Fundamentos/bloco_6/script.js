const statesSelect = document.querySelector('.estados');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const data = document.querySelector('#data');
const cpf = document.querySelector('#cpf');
const btn = document.querySelector("#button");
const form = document.getElementById("form1");
const formResp = document.querySelector('.resposta');
// const picker = new Pikaday({ field: document.getElementById('datepicker') });
// const  picker  =  new  Pikaday ( {  field : $ ( '#datepicker' ) [ 0 ]  } ) ;



function createStates(){
  for(let index in states){
    const newState = document.createElement('option');
    newState.innerText = states[index];
    statesSelect.appendChild(newState);
  }
}
createStates();

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const elemento = document.forms[0].elements;
    for(let index in elemento){
      let resp = elemento[index].value;
      let name = elemento[index].name;
      let resposta = `${name}:  ${resp}`;
      const pRes = document.createElement('p') 
      pRes.innerText = resposta;
      formResp.appendChild(pRes);
    }
});

let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY', 
  maxDate: new Date(),
  minDate: new Date(2014, 06, 16),
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});


