// let number = parseInt(prompt("Введіть число:"));
// if (number % 2 === 0) {
//    console.log("Ви ввели парне число.");
// } else {
//    console.log("Ви ввели непарне число.");
// }



// let lexics = prompt("Ввемдите текст");
// let lexics23 = (lexics.includes("23"));
// if (lexics23 == true) {
//    alert(`Ваш тект содержит 1 пароль`);
// };
// if (lexics23 == false) {
//    alert(`Ваш тект не содержит 1 пароль`);
// };
// let lexicsef = (lexics.includes("ef"));
// if (lexics23 == true) {
//    alert(`Ваш тект содержит 2 пароль`);
// };
// if (lexics23 == false) {
//    alert(`Ваш тект не содержит 2 пароль`);
// };


// alert(confirm('Пошли пить пиво') ? "Скоро буду" : "Ты как женился, вообще от рук отбился");


// let gender = confirm("Вы мужчина или женщина?");
// if (gender) {
//    alert(`Пошли за пивом`);
// } else {
//    alert(`Отпусти мужа на пиво`);
// }


// let ukrSize = prompt("Введіть свій розмір одягу в українській системі розмірів:");
// let usSize;
// switch (ukrSize) {
//    case "40":
//       usSize = "4";
//       break;
//    case "42":
//       usSize = "6";
//       break;
//    case "44":
//       usSize = "8";
//       break;
//    case "46":
//       usSize = "10";
//       break;
//    case "48":
//       usSize = "12";
//       break;
//    case "50":
//       usSize = "14";
//       break;
//    case "52":
//       usSize = "16";
//       break;
//    case "54":
//       usSize = "18";
//       break;
//    case "56":
//       usSize = "20";
//       break;
//    case "58":
//       usSize = "22";
//       break;
//    case "60":
//       usSize = "24";
//       break;
//    default:
//       usSize = "Не вдалося перетворити розмір, будь ласка, перевірте введені дані та спробуйте ще раз.";
//       break;
// }
// alert("Ваш розмір одягу в американській системі розмірів: " + usSize);


// let gender = confirm("Ви чоловік?");
// if (gender) {
//    alert("Ви чоловік");
// } else {
//    alert("Ви жінка");
// }

// let ageConfirmed = confirm("Скільки Вам років?");
// if (ageConfirmed) {
//    let age = prompt("Введіть Ваш вік:", "");
//    if (age === null || age === '') {
//       alert("Помилка! Ви не ввели вік!");
//    } else {
//       alert(`Вам ${age} років!`);
//    }
// } else {
//    alert("Ви відмовились вказувати свій вік.");
// }


// let age = prompt("Скільки Вам років?", "");
// if (age === '' || age === null) {
//    alert("Помилка! Ви не ввели вік!");
// } else {
//    alert(`Вам ${age} років!`);
// }


// confirm('shoping') ? 'go' : 'you byka';


// let shopping1 = confirm("Шопінг?");
// if (shopping1 === false) {
//    alert("Ти - бяка");
// } else if (shopping1 === true) {
//    alert(`Пішли`);
// }


// let firstName = prompt("Введіть ім'я:") || "Іван";
// let lastName = prompt("Введіть прізвище:") || "Іванов";
// let middleName = prompt("Введіть по-батькові:") || "Іванович";
// console.log(`ПІБ: ${lastName} ${firstName} ${middleName}`);


// let firstName1 = prompt("Введіть ім'я:");
// if (!firstName1) {
//    firstName1 = "Іван";
// }
// let lastName = prompt("Введіть прізвище:");
// if (!lastName) {
//    lastName = "Іванов";
// }
// let middleName = prompt("Введіть по-батькові:");
// if (!middleName) {
//    middleName = "Іванович";
// }
// console.log(`ПІБ: ${lastName} ${firstName} ${middleName}`);


// let login = prompt("Введіть логін:", "");
// if (login === "admin") {
//    let password = prompt("Введіть пароль:", "");
//    if (password === "qwerty") {
//       alert("Привіт, " + login + "!");
//    } else {
//       alert("Невірний пароль!");
//    }
// } else {
//    alert("Невірний логін!");
// }


// let currency = prompt("Введіть валюту (наприклад, USD, EUR):").toUpperCase();
// let isBuying = confirm("Ви хочете купити цю валюту? Натисніть 'ОК', якщо так, або 'Відміна', якщо продати.");
// let rate;
// if (currency === "USD") {
//    rate = isBuying ? 27.50 : 27.00;
// } else if (currency === "EUR") {
//    rate = isBuying ? 32.50 : 32.00;
// } else {
//    alert("На жаль, ми не обмінюємо цю валюту.");
// }
// if (rate) {
//    let amount = Number(prompt("Введіть суму для обміну:"));
//    let result = isBuying ? amount / rate : amount * rate;
//    alert(`Ви отримаєте ${result.toFixed(2)} ${currency}`);
// }


let userChoice = prompt("Введіть свій вибір (камінь, ножиці, папір):").toLowerCase();
let computerChoice = Math.random();
if (computerChoice < 0.34) {
   computerChoice = "камінь";
} else if (computerChoice <= 0.67) {
   computerChoice = "ножиці";
} else {
   computerChoice = "папір";
}
alert(`Комп'ютер вибрав ${computerChoice}.`);
let result;
if (userChoice === computerChoice) {
   result = "Нічия!";
} else if (userChoice === "камінь") {
   result = (computerChoice === "ножиці") ? "Ви перемогли!" : "Комп'ютер переміг!";
} else if (userChoice === "ножиці") {
   result = (computerChoice === "папір") ? "Ви перемогли!" : "Комп'ютер переміг!";
} else if (userChoice === "папір") {
   result = (computerChoice === "камінь") ? "Ви перемогли!" : "Комп'ютер переміг!";
} else {
   result = "Ви ввели неправильний вибір!";
}
alert(result);


