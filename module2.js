// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const string = "javascript";

// for (const day of string) {
//   console.log(day);
// }

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]


// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 2)); // ["Ajax", "Poly"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Polys"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-3)); // ["Poly", "Kiwi"]

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]


// const result = [1, 2, 3, 4, 5]

// for (let i = 0; i < result.length; i += 1) {
//     console.log(`index - ${i}`, result[i]);
// }

// const genres = ['Jazz', 'Blues'];
// genres.push('rock')
// const delfel = genres.shift()
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());


// genres.unshift('regg', 'country')
// console.log(genres);


// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'rockk')
// // console.log(genres);
// console.log(genres.splice(0, 1, 'villo'));
// console.log(genres);

// console.log(genres.splice(0, 1)[0]);

// const values = '8 11'
// const arr = values.split(' ')
// console.log(arr);

// const result = arr[0] * arr[1]
// console.log(result);

// const fruits = ['apple', 'bab', 'vare', 'mare']

// for (let i = 0; i <= fruits.length; i += 1){
//     console.log(`num ${i+1} value ${i}`);
// }

// const string = 'Welcome to the future'
// const arr = string.split(" ")

// arr.shift();
// arr.pop();
// const result = arr.join(' ')
// console.log(result);

// const string = 'Welcome to the future'
// const result = string.split(' ').reverse().join(' ')
// console.log(result);

/**
 * 
//  * @param {*} params 
//  */



// function
//     name(params) {
// }

// function checkAge(age) {
// if (age >= 18) {
//     return 'You are an adult'
//     } 
//     return "You are a minor"
// }
//  console.log(checkAge(20));
// console.log(checkAge(8) );

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam'
//     if (password === ADMIN_PASSWORD) {
//         return 'Welcome'
//     }
//         return "Access denied, wrong password!"
// }
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// function checkStorage(available, ordered = 0) {
//     if (ordered === 0) {
//         return "Your order is empty!"
//     }
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!"
//     }
//     else {
//         return "The order is accepted, our manager will contact you"
//     }
// }
// console.log(checkStorage(150, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(100, 130));

//6.
// const fruits = ["apple", "plum", "pear", "orange"]
// fruits[0] = 'peach';
// fruits[fruits.length - 1] = 'banana';
// console.log(fruits);

//7.
// const fruits = ["apple", "plum", "pear", "orange"]
// console.log(fruits.length);

//8
// const fruits = ["apple", "plum", "pear", "orange"]
// console.log(fruits.length -1);

//9
// function getExtremeElements(array) {
//    const  firstEl = array[0]
//     const secondEl = array[array.length - 1] 
//     const result = [firstEl, secondEl];
//     return result;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

//10
// function splitMessage(message, delimiter) {
//     let words = message.split(delimiter)
//     return words
// }
// console.log(splitMessage("Mango hurries to the train", " "));

//11
// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const totalPrice = words.length * pricePerWord;
//     return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

//12.
// function makeStringFromArray(array, delimiter) {
//     const string = array.join(delimiter)
//     return string;
// }
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));

//13.
// function slugify(title) {
//     const slug = title.toLowerCase().split(' ').join('-')
//     return slug;
// }

// console.log(slugify("Arrays for begginers"));

//14.
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1) // simple -1
// const lastThreeEls = fruits.slice(-3)

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//15
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients)
// console.log(allClients);

//16
// function makeArray(firstArray, secondArray, maxLength) {
//     let allArray = firstArray.concat(secondArray)
//     if (allArray <= maxLength) {
//         return allArray;
//     } else {
//         return allArray.slice(0, maxLength);
//     }
// }

// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

//17
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//     console.log(i);
// }

//18
// let totalSum = 0
// function calculateTotal(number) {
//     for (let i = 0; i <= number; i += 1){
//         totalSum += i;
//     }
//     return totalSum;
// }
// console.log(calculateTotal(3));

//19
//     const fruits = ["apple", "plum", "pear", "orange"];
// let fruit;
// for (let i = 0; i < 4; i += 1){
//     fruit += 1;
//         console.log(fruits[i]);
// }

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//20
// let total =0;
// function calculateTotalPrice(order) {
//     for (let item of order){
//         total += item;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//21
// function findLongestWord(string) {
//     const splitStr = string.split(' ');
//     let theLongestWord = splitStr[0];
//     for (let i = 0; i < splitStr.length; i+=1) {
//         if (splitStr[i].length > theLongestWord.length)
//             theLongestWord = splitStr[i];
//     }
//     return theLongestWord;
// }

// // console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog") );

//22
// function createArrayOfNumbers(min, max) {
//     const newArray = [];
//     for (let i = min; i <= max; i += 1){
//         newArray.push(i);
//     }
//     return newArray;
// }
// console.log(createArrayOfNumbers(1, 10));

//23
// function filterArray(numbers, value) {
//     const newArray = [];
//     for (let i = 0; i < numbers.length; i+=1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//   return newArray;
// }
//     console.log(filterArray([1, 2, 3, 4, 5], 3));

//24

// function checkFruit(fruit) {
    //   const fruits = ["apple", "plum", "pear", "orange"];
//     return fruits.includes(fruit)
// }
// console.log(checkFruit("apple"));

//25
// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i <= array1.length; i += 1){
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i])
//         }
//     }
//     return newArray
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//26
// function calculateTotalPrice(order) {
//     let total =  0;
//     for (let i = 0; i < order.length; i += i){
//         total += order[i];
//     }
//     return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

//27
// function filterArray(numbers, value) {
//     const newArray = [];
//     for (let number of numbers) {
//         if (number > value) {
//             newArray.push(number)
//         }
//     }
//             return newArray;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//29
// function getEvenNumbers(start, end) {
//     const newArray = [];
//     for (let i = start; i < end; i += 1){
//         if (i % 2 === 0) {
//             newArray.push(i);
//         }
//     }
//     return newArray;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(7, 7));

//30
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i <= end; i += 1){
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }
// console.log(number);

//31
// function findNumber(start, end, divisor) {
//     let number;
//     for (let i = start; i < end; i += 1){
//         if (i % divisor === 0) {
//             number = i;
//             return number; 
//         }
//     }
// }
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(8, 17, 3));

//32
// function includes(array, value) {
//     for (let i = 0; i < array.length; i += 1){
//         if (array[i] === value) {
//             return true;
//         }
//     }
//             return false;
// }
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));