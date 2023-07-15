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

const string = 'Welcome to the future'
const result = string.split(' ').reverse().join(' ')
console.log(result);

