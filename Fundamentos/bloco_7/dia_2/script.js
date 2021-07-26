const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Exercício 1
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryName = order.order.delivery.deliveryPerson;
  const name = order.name;
  const number = order.phoneNumber;
  const street = order.address.street;
  const houseNumber = order.address.number;
  const apartment = order.address.apartment;

  return `Olá ${deliveryName}, entrega para: ${name}, Telefone: ${number}, ${street}, N°: ${houseNumber}, AP: ${apartment}`;
}
console.log(customerInfo(order));


// Exercício 2
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = (order.name = 'Luis Silva');
  const pizzas = Object.keys(order.order.pizza);
  const drink = Object.values(order.order.drinks.coke);
  const price = (Object.values(order.payment) - 10);
  return `Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink[0]} é ${price}`
}
console.log(orderModifier(order))


// Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
lesson2['turno'] = 'manhã';
console.log(lesson2);

// Exercício 2
function keysList(key){
  let keys = Object.keys(key)
  return keys;
}
console.log(keysList(lesson1));

// Exercício 3
function sizeObject(object){
  let size = Object.keys(object).length;
  return size;
}
console.log(sizeObject(lesson1));

// Exercício 4
function objectValues(object){
  let values = Object.values(object);
  return values;
}
console.log(objectValues(lesson2));

// Exercício 5
const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});
console.log(allLessons);

// Exercício 6

const totalStudents = (students) => {
  let numberOfStudents = 0;
  const lessons = Object.keys(students);

  for(index in lessons){
    numberOfStudents += students[lessons[index]].numeroEstudantes;
  }
  return numberOfStudents;
}

console.log(totalStudents(allLessons));
