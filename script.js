
// *---Виведення вікна 

// const message = prompt("Яка офіційна назва JavaScript ?");
// console.log(message);

// if (message.toLowerCase() === "ECMA".toLowerCase()) {
//     alert ("правильно");
// } else {
//     alert("not rihth");
// }

// *------вивести години і хвилини

// const globalMinutes = 60;

// const hours = Math.floor(globalMinutes / 60);
// const minutes = globalMinutes % 60;

// const modiliedHours = String(hours).padStart(2, "0");

// const modiliedMinutes = String(minutes).padStart(2, "0");

// console.log(`${modiliedHours}:${modiliedMinutes}`);


//*-------цикл, що виводить у консоль числа від мах до мін у порядку зменшення.
// Вивести в консоль всі парні числа від мах до мін.

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


//*--за доп. циклу фор додайте всі парні числа від мін до макс 

// const max = 50;
// const min = 0;
// let sum = 0;
// for (let i = min; i <= max; i += 1) {

// if (i % 2 === 0) {
//     sum += i;
// }   
// }
// console.log(sum);

// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i+= 1) {
//   console.log(i);
    
// }

//*-----------Задачі--------------------------

// цикл for...of.
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let item of order) {
//     total += item;
//   }

//   return total;
// }


// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//  for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }


//*-------------------------------
// функція findNumber(start, end, divisor) 

// повертає перше число від start до end, яке ділиться на divisor без остачі

// function findNumber(start, end, divisor) {

//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
// return i;
//     }
//   }
// }


//*---Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// function includes(array, value) {
// let array1 = [];

//   for (let i = 0;  i < array.length; i+= 1) {
// if (array[i] === value) {
//       return true;
// }
//   }
//   return false;
// }


//*------------числа,що вводитькористувач додаються в prompt

// let total = 0;
// let userNumber = prompt("Введіть число");
//     let check = false;

// do {
//     if (userNumber) {
//         check = true;
//         total += Number(userNumber);
//         userNumber = prompt("Введіть число");
//     } else {
//         check = false;
//         console.log(`Загальна сума чисел дорівнює ${total}`);
//     }

// } while (check);


//*-----код який буде запитувати логін за доп. промпт

// const login = prompt("Enter login");
// const userlogin = "Admin";
// const userPassword = "I main"

// if (login === userlogin) {
//     const password = prompt("Enter password");
//     if (password === userPassword) {
//         alert("Welcome")
//     } else {
//         alert("Wrong password")
//     }
// } else if (! login) {
//     alert("Cancel")
// } else {
//     alert("I dont know you")
// }

//*-----напиши цикл який буде просити ввести число більше 100, якщо не ввели, попроси ввести ще раз

// let userEnter = prompt("enter number > 100")

// if (userEnter > 100) {
//     alert("Good job")
// } else {
//     alert ("wrong number")
// }

//*-----у змінінй мін лежить число від 0 до 59
//* Потрібно визначити в якку чверть години потрапить це число

// const min = 15;

// if (min < 15 ) {
//     console.log("first");
// } else if(min >= 15 && min < 30) {
//     console.log("second");
// } else if (min >= 30 && min < 45) {
//     console.log("third");
// } else {
//     console.log("four");
// }

//*--дано рядок який склад зі символів напр 'abcde'
//* перевірте що першим символом цього рядка є літера "а"
//* якщо це так вивести так у іншому випадку вивести ні

// const str = 'abcde'
// if (str[0] === "a") {
//     console.log("yes");
// } else {
//     console.log("no");
// }