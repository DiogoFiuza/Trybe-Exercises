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
