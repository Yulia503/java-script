//*1 Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza ();
// const pointer = makePizza;

// console.log(result); // Your pizza is being prepared, please wait.
// console.log(pointer);// link function makePizza()

//*2  Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром 
// (параметр callback) колбек - функцію і повертала її виклик.Функція deliverPizza або makePizza 
// буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//    return callback(pizzaName);

// }
//     console.log(makeMessage("Royal Grand", makePizza))// Pizza Royal Grand is being prepared, please wait...

//* 3 Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом 
//* інлайн колбек - функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);//Pizza Royal Grand is being prepared, please wait...
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`); // Delivering pizza Royal Grand.
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`); // Eating pizza Ultracheese
// });

//* 4 Функція може приймати довільну кількість колбеків.Hеобхідно написати логіку обробки замовлення піци. 
// Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//       if (!this.pizzas.includes(pizzaName)) {
//           return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//         return onSuccess(pizzaName);
//   }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);//Your order is accepted. Cooking pizza Smoked.'
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//* 5 forEach. Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//     orderedItems.forEach(element => {
//         totalPrice += element;
//     });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([8,9,8,8,12,11,24,5,17,18,22,22,7]) ); //171

//* 6 Задача.Фільтрація масиву чисел
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//   return filteredNumbers;
// }

// ForEach

function filterArray(numbers, ...value) {
  const filteredNumbers = [];
  // Change code below this line
    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number)
        }
    });
  // Change code above this line
  return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 38));