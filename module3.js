//* 1. Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

//     imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//     descr - опис, значення "Spacious apartment in the city center";
//     rating - рейтинг, значення 4;
//     price - ціна, значення 2153;
//     tags - метаінформація, масив ["premium", "promoted", "top"].

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153, 
//     tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

//* 2. Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

//     name - ім'я власника, значення "Henry";
//     phone - телефон, значення "982-126-1588";
//     email - пошта, значення "henry.carter@aptmail.com".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner : { 
//     name : "Henry",
//     phone : '982-126-1588' ,
//     email : "henry.carter@aptmail.com",
//     }
// }
// console.log(apartment);

//* 3.Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

//     aptRating - рейтинг;
//     aptDescr - опис;
//     aptPrice - ціна;
//     aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptPrice);
//   console.log(aptTags);

//* 4. Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

//     ownerName - ім'я власника;
//     ownerPhone - телефон власника;
//     ownerEmail - пошта власника;
//     numberOfTags - кількість елементів масиву у властивості tags;
//     firstTag - перший елемент масиву у властивості tags;
//     lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


//* 5. Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

//     aptRating - рейтинг;
//     aptDescr - опис;
//     aptPrice - ціна;
//     aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment ["rating"];
// const aptDescr = apartment ["descr"];
// const aptPrice = apartment ["price"];
// const aptTags = apartment ["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//* 6. Доповни код, оновивши значення властивостей об'єкта apartment:
//     ціну у властивості price на 5000;
//     рейтинг квартири у властивості rating на 4.7;
//     ім'я власника у вкладеній властивості name на "Henry Sibola";
//     масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.owner.tags);

// Додай об'єкту apartment кілька нових властивостей:
//     area - площа в квадратних метрах, число 60;
//     rooms - кількість кімнат, число 3;
//     location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
//     country - країна, рядок "Jamaica";
//     city - місто, рядок "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
// country : "Jamaica",
// city : "Kingston",
// }


// console.log(apartment.area);
// console.log(apartment.rooms);

// console.log(apartment.location.country);
// console.log(apartment.location.city);



// * 8. Доповни код оголошення об'єкта таким чином, щоб у нього були властивості
// name, price, image і tags зі значеннями зі змінних з аналогічними іменами.
// Обов'язково використовуй синтаксис коротких властивостей.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     price,
//     image,
//     tags,
//     name,
    
// };
// console.log(name);



//*9. Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.
// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName] : "jqueryismyjam",
// };
// console.log(credentials.email);
// console.log(credentials.password);



//*10. Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);

// }
// console.log(keys);
// console.log(values);

//*11. Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//        keys.push(key);
//   values.push(apartment[key]);

// console.log(key);
// console.log(apartment[key]);
// }
 
// }

//*12. Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;

// }

// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);

//     for (const key in object) {
//         object.hasOwnProperty(key) 
//           propCount = keys.length;
//     }

//     return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//*13. Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key])
// }
// console.log(values);
// console.log(keys);

//* 14. Задача. Підрахунок властивостей 2.0

//Variable 1.
// function countProps(object) {
//   let propCount = 0;

//     const keys = Object.keys(object);
//     propCount = keys.length;
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//Variable 2.
// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     for (const key in object) {
//         object.hasOwnProperty(key) 
//           propCount = keys.length;
//     }
//     return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//* 15. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

//* 16. Задача: витрати на зарплату

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     const keys = Object.keys(salaries);
//     const values = Object.values(salaries);

//     for (const value of values) {
//         totalSalary += value;
//     }
    
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//* 17. Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
//     console.log(hexColors);
//     console.log(rgbColors);

//* 18. Задача. Пошук об'єкта за значенням властивості

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (let product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//      return null;
// }
// console.log(getProductPrice("Radar"));

//* 19. Задача: колекція значень властивості
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

 
// function getAllPropValues(propName) {
//    const array = [];
//     for (const product of products) {
//    if (product[propName]) {
//     array.push(product[propName])
//    }
//     }
//         return array;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));

//* 20. Задача: загальна вартість товару

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let totalSum = 0;
    
//     for (let product of products) {
// if (Object.values(product).includes(productName)) {
//     totalSum = product["price"] * product["quantity"];
// }
//     }
//     return totalSum;
// }
// console.log(calculateTotalPrice("Radar"));

//*21 деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);

//*22 Дод. значення, які будуть присвоєні тільки у разі, коли в об'єкті відсутня властивість з таким ім'ям.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);

//* 23 Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const icon = "";
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(highIcon);

//* 24 деструктуризація під час перебирання масиву об'єктів циклом for...of

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);

//* 25  Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },

//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
// } = forecast;
// console.log(lowToday);

//* 26 Деструктуризація функції

// function calculateMeanTemperature(forecast) {
//     const {
//         today: {
//             low: todayLow,
//             high: todayHigh,
//         },
//         tomorrow: {
//             low: tomorrowLow,
//             high: tomorrowHigh,
//         },
//     } = forecast; 
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

//* 27 У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(... scores);
// const worstScore = Math.min(... scores);

// console.log(bestScore);
// console.log(worstScore);

//* 28 У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

//     У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
//     У змінній bestScore був найвищий загальний бал.
//     У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [... firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//* 29 В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {... defaultSettings, ...overrideSettings};

// console.log(finalSettings.timePerQuestion);

//* 30 Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//     const newData = { completed, category, priority, ... data }
//     return newData;
// }
// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));// { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

//* 31 Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// function add(... args) {
//     let totalSum = 0;
//     for (const arg of args) {
//   totalSum += arg;
      
//     }
//     return totalSum;
// }
// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75

//* 32 Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(max, ...args) {
//   let total = 0;
 
//     for (const arg of args) {
//       if (arg > max ) {
//             total += arg;
//       }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27));// 0 

//* 33 Задача. Масив збігів
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

   //перебрати ітем (кожен елемент) масиву за доп фор оф,
  // якщо аргс(інші елементи) включають в себе елементи арея(ітем),
 //     тоді в матчес запушити ці елементи (пуш.ітем)
 
//     for (const item of array) {
//         if (args.includes(item)) {
//             matches.push(item)
//         }
//     }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));



//* 34 Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     },
// };

// console.log(bookShelf.addBook("Haze"));//Adding book Haze

//* 35 Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//       const delateIndex = this.books.indexOf(oldName);
//       this.books.splice(delateIndex, 1, newName)
//       return this.books;
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));




//* 36 До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю 
// - додавання, видалення, пошуку та оновлення зілля.Додай об'єкту atTheOldToad 
// властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
// potions : [];
// };

//* 37 Задача. Отримуємо все зілля
// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//   potions: [],
//     getPotions() {
//        return this.potions
//    }
// };
// console.log(atTheOldToad.getPotions()); // []

//*38 Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     }
// };
// console.log(atTheOldToad.getPotions());//["Speed potion", "Dragon breath", "Stone skin"]

//* 39 Задача: додаємо нове зілля
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
    
//          або/if (this.potions === potionName) //або

//       if (this.potions.includes(potionName)) {
//       }
//      this.potions.push(potionName)
//       return this.potions
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));//["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

//* Задача: видаляємо зілля
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    removePotion(potionName) {      
//       this.potions.splice(this.potions.indexOf(potionName), 1)
// return this.potions;
//    }  
//  };
//  console.log(atTheOldToad.removePotion("Dragon breath"));
//  console.log(atTheOldToad.removePotion("Speed potion"));

//* 40 Задача: оновлюємо зілля
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//       const UpdateName = this.potions.indexOf(oldName);
//       this.potions.splice(UpdateName, 1, newName)
//       return this.potions;
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));


//* 41 Задача: розширюємо інвентар

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//       for (let potion of this.potions) {
//           if (newPotion.name === potion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//       }
//     this.potions.push(newPotion);
//     },
    
//   removePotion(potionName) {

//       for (let i = 0; i < this.potions.length; i += 1) {
//           if (potionName === this.potions[i].name) {
//             return this.potions.splice(i, 1);
//           }
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     },
  
//     updatePotionName(oldName, newName) {
      
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (oldName === this.potions[i].name) {
//                return (this.potions[i].name = newName);
//             }
//         }
//   return `Potion ${oldName} is not in inventory!`;
   
//   },
// };

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book["genres"];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'
