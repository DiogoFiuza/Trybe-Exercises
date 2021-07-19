const statesSelect = document.querySelector('.estados');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const data = document.querySelector('#data');
const cpf = document.querySelector('#cpf');
const btn = document.querySelector("#button");
const form = document.getElementById("form1");
const formResp = document.querySelector('.resposta');
const inputCpf = document.querySelector('#cpf');

function createStates(){
  for(let index in states){
    const newState = document.createElement('option');
    newState.innerText = states[index];
    statesSelect.appendChild(newState);
  }
}



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

function formataCPF() {
  const cpfAtual = inputCpf.value
  let cpfAtualizado;
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  inputCpf.value = cpfAtualizado;
}

new window.JustValidate('.js-form', {
  rules: {
      name:{
        required: true,
        minLength: 3,
        maxLength: 40,
      },
      email: {
          required: true,
          email: true,
      },
      cpf: {
        required: true,
        maxLength: 11,
        minLength:11,
        type: 'number',
      },
      endereco: {
        required: true,
      },
      complemento: {
        required: true,
      },
      resumo: {
        required: true,
      },
      data: {
        required: true,
      },
      cargo: {
        required: true,
      },
      descricao_do_cargo: {
        required:true,
      },
      estados: {
        required: true,
        minLength: 1,
        maxLength: 28,
      },
      complemento: {
        required: true,
      },

  },
  
  messages: {
    name: {
      required: 'O campo é obrigatório.',
      maxLength: 'O campo deve conter no máximo de :value caracteres',
      minLength: 'O campo deve conter no mínimo de :value caracteres',
    },
    email: {
      required: 'O campo é obrigatório.',
      maxLength: 'O campo deve conter no máximo de :value caracteres',
      minLength: 'O campo deve conter no mínimo 11 números',
      email: 'Email inválido'
    },
    cpf: {
      required: 'O campo é obrigatório.',
      maxLength: 'O campo deve conter somente :value numeros',
      function: 'O campo deve conter somente numeros'
    },
    endereco: {
      required: 'O campo é obrigatório.',
    },
    estado: {
      required: 'O campo é obrigatório.',
    },
    cargo: {
      required: 'O campo é obrigatório.',
    },
    data: {
      required: 'O campo é obrigatório.',
    },
    resumo: {
      required: 'O campo é obrigatório.',
    },
    descricao_do_cargo: {
      required: 'O campo é obrigatório.',
    },
    complemento:{
      required: 'O campo é obrigatório.',
    },
    estados: {
      required: 'O campo é obrigatório.',
    }

  },
  submitHandler: function (form, values) {    
    console.log(form,values);
  }
  
  
});

btnSubmit.addEventListener('click', (event) => {
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

windcreateStates();ow.onload = () => {
  createStates();
}