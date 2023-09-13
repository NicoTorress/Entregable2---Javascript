const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



//==============================================================================================//

// a)  Las pizzas que tengan un id impar.
const pizzaImpar = pizzas.filter(pizza => pizza.id % 2 != 0)

console.log(pizzaImpar)



// b) Responder: ¿Hay alguna pizza que valga menos de $600?
const pizzaBarata = pizzas.some(pizza => pizza.precio < 600)

if (pizzaBarata) {
  console.log("Sí, tenemos pizzas más económicas")
}else{
  console.log("Lo sentimos, no tenemos pizzas por debajo de ese precio")
}



// c) El nombre de cada pizza con su respectivo precio.
const presentaPizzas = pizzas.forEach(pizza => console.log(`\nLa ${pizza.nombre} tiene un valor de $${pizza.precio}`))

console.log(presentaPizzas)



// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo)
const detalleIngredientes = pizzas.forEach((pizza) => {
  console.log(`\nLa ${pizza.nombre} tiene los siguiente ingredientes:`)
  pizza.ingredientes.forEach(ingrediente => console.log(`- ${ingrediente}`))
})

console.log(detalleIngredientes)


//Opción alternativa de un solo recorrido (No se si está bien, pero muestra por consola lo que se pide)
/**

  const detalleIngredientes = pizzas.forEach((pizza) => {
  console.log(`\nLa ${pizza.nombre} tiene los siguiente ingredientes: ${pizza.ingredientes.join(", ")}`)
  })

  console.log(detalleIngredientes)

 */