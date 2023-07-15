// let totalPrice;


// totalPrice = 10;
// console.log(totalPrice);

// 
// console.log(typeof (NaN));

// const result = 10 + Number("10px")
// // console.log(result);
// // console.log(typeof (result));


// console.log(isNaN(NaN));

// const result = Number("10px")
// console.log(result);

// const str = 'test value';

// console.log(str.indexOf('t'));
// console.log(str.indexOf('t', 2));
// console.log(str[3]);

// const value = 27.5
// console.log(Math.round(value));
// console.log(Math.floor(value));
// console.log(Math.ceil(value));

// let wight = "88,3"
// let hight = "1.75"

// wight = Number(wight.replace(',', '.'))
// hight = Number(hight.replace('.', '.')
// )
// console.log(wight);
// console.log(hight);


// const masa = Number((wight / Math.pow(hight, 2)).toFixed(1))
// console.log(masa);

// for (let i = 0; i < 20; i += 5) {
//   console.log(i);
// }

// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log('first', clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const message = prompt('What is the oficial language of JS?')
// // let answear = ''

// console.log(message);

// if (message === 'das') {
//     alert('Right')
// } else {
//     alert('Try again')
// }

// console.log(message);

// const message = prompt('What is the oficial language of JS?')
// let result;
// if (message === 'das') {
//     result = 'Right'
// } else {
//     result = 'Try again'
// }
// alert(result)

// const message = prompt('What is the oficial language of JS?')
// let result;
// message === 'DAS' ? result = 'Right' : result = 'Try again'; 
// alert(result)


// const hour = 14;
// const minutes = 0;
// let timestring;
// if (!minutes) {
//     timestring =  `${hour} h.`
// } else {
//     timestring = `${hour} h. ${minutes} m.`
// }

// console.log(timestring);

// const message = prompt('entera number')
// const toNum = Number(message);
// let result;
// console.log(message, toNum);
// if (!isNaN(toNum) && message) {
   
//     if (toNum > 0) {
//         result = 'its good number'
//         console.log('its good number');
//     } else if (toNum === 0) {
//         result = 'its 0'
//          console.log('its 0');
//     } else {
//         result = 'its bad number'
//          console.log('its bad number');
//     }
// } else {
//    result = 'enter number please'
//      console.log('enter number please');
//     }

// alert(result)

// console.log(message);


// const a = 140;
// const b = 120;

// let MaxNum;
// if (a > 100 && b > 100) {
    
// if (a > b) {
//     console.log('a', a);
// } else if( b > a) {
//     console.log('b', b);
// } else {
//     console.log('they are similar');
// }

// } else {
//     console.log(b + 512);
// }

// let link = 'https://mysite.com/aobut'

// if (!link.endsWith('./') ) {
//     link += './'
// } else {

// }

// console.log(link);

//-----------------------------------------------------

// let link = 'https://mysite.com/aobut'
// let link1 = 'https://my.com/aobut'

// if (!link.endsWith('./') && link.includes('mysite') ) {
//     link += './'
// } else {

// }

// console.log(link);
// console.log(link1);


//ternar

// let link = 'https://mysite.com/aobut'

// link = !link.endsWith('./') && link.includes('mysite') ? link + './' : link

// console.log(link);



// let hours = 44;

// if (hours < 17) {
//     console.log('pending');
// } else if (hours >= 17 && hours <= 24) {
//     console.log('expires');
// } else {
//     console.log('overdue');
// }

// const dedline = 2;

// if (dedline === 0) {
//     console.log('today');
// } else if (dedline === 1) {
//     console.log('tomorrow');
// } else if (dedline == 2) {
//     console.log('next day');
// } else {
//     console.log('in the future');
// }

// const dedline = 1;
// let result;

// switch (dedline) {
//     case 1:
//         result = 'today';
//         break;
//     case 2:
//         result = 'tomorrow'
//         break;
//     case 3:
//         result = 'next day';
//         break;
    
//     default:
//         result = 'in the future'
//         break;
// }

// console.log(result);


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const max = 100;
// const min = 19;

// for (let i = min; i <= max; i += 1) {
// if (!(i % 5) ) {    //* (i % 5 === 0)
//     console.log(i);
// }
// }


//*--------------------------------
// const input = prompt('what is the login?')
// let message;
// let password;

// if (input === 'Admin') {
//   const password = prompt('enter the password')
//     if (password === 'i-admin') {
//         message = 'hello'
//     } else {
//         message = 'try again'
//     }

// } else if (!(input ==='Admin')) {
//     message = 'I dont know you'
// } else {
//     message = 'exit'
// }

// alert(message);


// 2.
// let pricePerItem = 2000;
// let productName = "Droid";

// pricePerItem = 1500;
// productName = 'a'
// console.log(pricePerItem);
// console.log(productName);


//3.

// const topSpeed = 160;
// const distance = 617.54;
// let login = 'mango935'
// const isOnline = true;
// constisAdmin = false; 



// const pricePerItem = 3500;

// const orderedQuantity = 4

// const totalPrice = pricePerItem * orderedQuantity

// console.log(totalPrice);

// const productName = 'Draid';
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} is included in total price.`

// console.log(totalPrice);
// console.log(message);

//7.
// function sayHi () {
//     console.log("Hello, this is my first function!");
// }
// sayHi()

//8.
// function add (a, b, c) {
//     const result = a + b + c;
//     console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10)

//9.
// function add(a, b, c) {
//     return  a+b+c;
// }

// add(15, 27, 10)

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//10.
// function makeMessage(name, price) {
//     return `You picked ${name}, price per item is ${price} credits`
// }

// makeMessage('Radar', 6150)
// console.log(makeMessage('Scanner', 3500));
// makeMessage ('Scanner', 3500);
// makeMessage ('Reactor', 8000);
// makeMessage ('Engine', 4070);

//11.
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
// }

// console.log(calculateTotalPrice(5, 100));

//12.
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//     // return message;
// }


// console.log(makeOrderMessage(2, 100, 50));

// function isAdult(age) {
//    if (age >= 18) {
//        return true;
//    } else {
//        return false;
//    }

// }

// function isAdult(age) {
//   const passed = age >= 18
//     return passed;
// }
 
// console.log(isAdult(20));
// console.log(isAdult(14));

// let SAVED_PASSWORD = 'jqueryismyjam';


// function isValidPassword (password) {
//     const isMatch = (SAVED_PASSWORD === password);
//     return isMatch;
// }

// // // isValidPassword (true);

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));
// const age = 1;
// let message;

// if (age >= 18) {
//     message = "You are an adult"
// } else {
//     message = "You are a minor"
    
// }

// console.log(message);

// function checkAge(age) {
//     if (age >= 18) {
//         return  "You are an adult"
//     } else {
//        return "You are a minor"
//     }
// }
// console.log(checkAge(20));
// console.log(checkAge(8));

//16.
// let message;
// function checkAge(age) {
//     if (age >= 18) {
//         message = "You are an adult"
//     } else {
//        message = "You are a minor"
//     }
//     return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));


// let message;
// function checkStorage(available, ordered) {
//     if (ordered > available) {
//         message = "Not enough goods in stock!";
//     } else {
//         message = "Order is processed, our manager will contact you."
//     }
//     return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

//17.

// let a = 6;
// a += 1;
// console.log(a);
// let message;
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//     return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
//19.
// const ADMIN_PASSWORD = 'jqueryismyjam'
// let message;
// function checkPassword(password) {
//    if (password === ADMIN_PASSWORD) {
//        message = 'Welcome!';
//    } else if (password === null) {
//        message = "Canceled by user!";
//    } else {
//     message = "Access denied, wrong password!"
//    }
//     return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("jqueryismyjam"));
//20.
// let message;
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         message = "There are no products in the order!";
//     } else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you"
//     }
//     return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

//21.
// function isNumberInRange(start, end, number) {
//     if (true) {
//         const isInRange = (number >= start && number <= end);
//         return isInRange;
//     }
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// function isNumberInRange(start, end, number) {
//         const isInRange = (number >= start && number <= end);
//         return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

//22.

// function checkIfCanAccessContent(subType) {
//     (subType === "pro" || subType === "vip");
//     return subType;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType === 'pro'  || subType === 'vip'); // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));

//23.
// function isNumberNotInRange(start, end, number) {
//     const isInRange = (!number <= start && number >= end)
//     return isInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));

//24.
// const BASE_DISCOUNT = 0;
// const BRONZE_DISCOUNT = 0.02
// const SILVER_DISCOUNT = 0.05
// const GOLD_DISCOUNT = 0.1


// function getDiscount(totalSpent) {
//     let discount;
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }
//     return discount;
// }
// console.log(getDiscount(137000));

//25.

// function checkStorage(available, ordered) {

//    const result = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//     return result;
// }

// console.log(checkStorage(200, 20));

//26.
// let message;
// const ADMIN_PASSWORD = 'jqueryismyjam';
// function checkPassword(password) {
// if (password === ADMIN_PASSWORD) {
//     message = "Access is allowed"
// } else {
//     message = "Access denied, wrong password!"
// }
//     return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// let message;
// const ADMIN_PASSWORD = 'jqueryismyjam';
// function checkPassword(password) {
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

//27.
// let price;
// function getSubscriptionPrice(type) {
//     switch (type) {
//         case 'starter':
//             price = 0
//             break;
//         case 'professional':
//             price = 20
//             break;
//         case 'organization':
//             price = 50
//             break;

//         default:
//             break;
//     }
//     return price;
// }

// console.log(getSubscriptionPrice("professional"));

//28.
// let message;
// const ADMIN_PASSWORD = 'jqueryismyjam'
// function checkPassword(password) {
//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
    
//         default:
//             message = "Access denied, wrong password!"

//             break;
//     }
//     return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("jqueryismyjam"));

// 29.

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) {
//   case "China":
//      message = `Shipping to ${country} will cost 100 credits`;
//     break;

//   case 'Chile':
//     message = `Shipping to ${country} will cost 250 credits`;
//     break;

//   case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//         break;
    
//     case 'Jamaica':
//    message = `Shipping to ${country} will cost 120 credits`;
//         break;
    
//     default : 
//     message = "Sorry, there is no delivery to your country";
// }

//   return message;
// }

// console.log(getShippingCost("China"));
// console.log(getShippingCost("Germany"));


//30.
// function getNameLength(name) {
//     return `Name ${name} is ${name.length} characters long`
// }
// console.log(getNameLength("Poly"));

//31.
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length -1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//32.

// function getSubstring(string, length) {
//     const substring = string.slice(string, length)
//     return substring;
// // }
// function getSubstring(string, length) {
//   const substring = string.slice (0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 0));

//33.
// let result;
// function formatMessage(message, maxLength) {
//     if (message.length > maxLength) {
//         return message.slice(0, maxLength) + '...'
//     } else {
//         return message;
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));

//34.
// let normalizedInput 
// function normalizeInput(input) {
//   return normalizedInput = input.toLowerCase()
    
// }

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"));

//35.
// function checkForName(fullname, name) {
//     const result = fullname.includes(name);
//     return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));

//36.
// let result;
// function checkForSpam(message) {

//  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
//     return result;
// }
// console.log(checkForSpam("Latest technology news"));