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

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const cliente = order['name'];
  const telefone = order['phoneNumber'];
  const endereço = 'address';
  const rua = order[endereço].street;
  const numero = order[endereço].number;
  const apartamento = order[endereço].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${cliente}, telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}.`);

}

customerInfo(order);

const orderModifier = (order) => {
  const novoCliente = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const bebidas = order.order.drinks.coke.type;
  const novoValor = order.payment.total = '50';

  console.log(`Olá ${novoCliente}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebidas} é R$ ${novoValor}`);

}

orderModifier(order);