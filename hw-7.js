// Игра «Переверни текст»
// Описание

// создайте игру, где пользователю нужно ввести текст, который будет перевернут.

// Требования:

// Сайт запрашивает у пользователя текст.
// Сайт переворачивает введенный текст.
// Сайт выводит перевернутый текст.

function reverseText() {
    const text = prompt("Введите текст для переворачивания:");
    if (text !== null) {
        const reversed = text.split('').reverse().join('');
        alert(`Ваш перевернутый текст: ${reversed}`);
    }

    if (text === null) {
        alert('Игра отменена');
        return;
    }
}

document.getElementById('startGameThreeButton').addEventListener('click', function () {
    reverseText();
});

// Игра «Викторина»
// Описание

// создайте простую викторину с несколькими вопросами и вариантами ответов.

// Требования:

// Сайт предлагает несколько вопросов и вариантов ответов.
// Запрашивает у пользователя ответы на каждый вопрос.
// Подсчитывает и выводит количество правильных ответов.
// Последовательность создания игры Викторина:

// Используйте предоставленный массив вопросов:
// Массив 
// quiz
//  содержит три вопроса с вариантами ответов и правильными ответами.
// // Массив вопросов и правильных ответов
//        const quiz = [
//            {
//                question: "Какой цвет небо?",
//                options: ["1. Красный", "2. Синий", "3. Зеленый"],
//                correctAnswer: 2 // номер правильного ответа
//            },
//            {
//                question: "Сколько дней в неделе?",
//                options: ["1. Шесть", "2. Семь", "3. Восемь"],
//                correctAnswer: 2
//            },
//            {
//                question: "Сколько у человека пальцев на одной руке?",
//                options: ["1. Четыре", "2. Пять", "3. Шесть"],
//                correctAnswer: 2
//            }
//        ];
// Запросите у пользователя ответы. Используйте функцию 
// prompt()
//  для получения ответа пользователя на каждый вопрос.
// Проверьте ответы и подсчитайте правильные:
// Сравните ответ пользователя с правильным ответом и увеличьте счетчик правильных ответов, если ответ верный.
// Выведите результат:
// В конце игры выведите количество правильных ответов с помощью 
// alert()
// .

function startPlusQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа (начиная с 1)
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (const item of quiz) {
        const userAnswer = prompt(`${item.question}\n${item.options.join('\n')}`);
        if (parseInt(userAnswer) === item.correctAnswer) {
            score++;
        }

        if (userAnswer === null) {
            alert('Игра отменена');
            return;
        }
    }

    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);

}

document.getElementById('startGameFourButton').addEventListener('click', function () {
    startPlusQuiz();
});

// Задания на работу с кодом
// Задание 1
// Преобразовать строку 
// 'js'
//  в верхний регистр.



// Критерии оценки
// Работа будет оценена по следующим критериям
// Строка 
// 'js'
//  преобразована в верхний регистр с помощью метода 
// toUpperCase()
//  и выведена.
// Результат работы загружен на GitHub и отправлена ссылка на pull request.

let str = 'js';
let strUp = str.toUpperCase();
console.log(strUp);



// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.



// Критерии оценки
// Работа будет оценена по следующим критериям
// Функция принимает массив строк и строку, возвращает новый массив с элементами, начинающимися с заданной строки, регистр не влияет.
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Используйте функции 
// toLowerCase()
//  и 
// startsWith()
//  для сравнения начала строк.

function filterByStringPrefix(arr, prefix) {
    const lowerCasePrefix = prefix.toLowerCase();

    return arr.filter(item => item.toLowerCase().startsWith(lowerCasePrefix));
}

const stringsArray = ["apple", "banana", "apricot", "grape", "Avocado"];
const prefix = "AP";
const filteredArray = filterByStringPrefix(stringsArray, prefix);

console.log(filteredArray);

// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

// Критерии оценки
// Работа будет оценена по следующим критериям
// Число округлено до меньшего целого, большего целого и ближайшего целого с использованием 
// Math.floor()
// , 
// Math.ceil()
//  и 
// Math.round()
// , результаты выведены в консоль.
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Используйте встроенные функции 
// Math.floor()
// , 
// Math.ceil()
//  и 
// Math.round()
//  для округления значений.

const number = 32.58884;
// округление до меньшего целого 
const smallestInteger = Math.floor(number);
console.log(`Округление до меньшего целого: ${smallestInteger}`);

// Округление до большего целого 
const greaterWhole = Math.ceil(number);
console.log(`Округление до большего целого: ${greaterWhole}`);


// Округление до ближайшего целого
const nearestInteger = Math.round(number);
console.log(`Округление до ближайшего целого: ${nearestInteger}`);





// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.


// Критерии оценки
// Работа будет оценена по следующим критериям
// Минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 найдены с использованием 
// Math.min()
//  и 
// Math.max()
// , результаты выведены в консоль.
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Используйте функции 
// Math.min()
//  и 
// Math.max()
//  для нахождения минимального и максимального значений.

const numbers = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);
console.log(`Минимальное значение: ${minValue}`);
console.log(`Максимальное значение: ${maxValue}`);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.


// Критерии оценки
// Работа будет оценена по следующим критериям
// Функция выводит случайное число от 1 до 10 с использованием 
// Math.random()
//  и 
// Math.floor()
// .
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Используйте функции 
// Math.random()
//  и 
// Math.floor()
//  для генерации случайных чисел.

const random = Math.floor(Math.random() * 10 + 1);
console.log(random);


// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.


// Критерии оценки
// Работа будет оценена по следующим критериям
// Функция принимает целое число и возвращает массив случайных чисел от 0 до этого числа, длина массива — половина от переданного числа.
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// В JavaScript функция 
// Math.random()
//  возвращает случайное число от 
// 0
//  (включительно) до 
// 1
//  (не включая).

function generateRandomArray(num) {
    if (!Number.isInteger(num) || num <= 0) {
        console.log("Пожалуйста, введите положительное целое число.");
    }

    if (num % 2 !== 0) {
        console.log('Нужно только четное число');
        return 0;
    }

    const length = Math.floor(num / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumbers = Math.floor(Math.random() * num);
        randomArray.push(randomNumbers);
    }

    return randomArray;
}

const num = Math.floor(Math.random() * 20);
console.log(`Случайное значение: ${num}`);
const randomNumbersArray = generateRandomArray(num);
console.log(randomNumbersArray);

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandomInRange(min, max) {
    // Проверка на корректность входных параметров
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        console.log("Оба значения должны быть целыми числами.");
    }
    if (min > max) {
        console.log("Минимальное значение не может быть больше максимального.");
    }

    // Генерация случайного числа в заданном диапазоне
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = Math.floor(Math.random() * 10 + 1);
console.log(`Первое случайноне число: ${min}`);

const max = Math.floor(min * 10);
console.log(`Второе случайное число: ${max}`);

const randomNum = getRandomInRange(min, max);
console.log(`Случайное число между: ${min} и ${max} = ${randomNum}`);


// Задание 8
// Вывести в консоль текущую дату.

const currentDate = new Date();
// const formattedDate = currentDate.toLocaleString();
// console.log(formattedDate);
console.log(currentDate);

// Задание 9
// Создать переменную
// currentDate
// , хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

const currentNowDate = new Date();
const futureDate = new Date(currentNowDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:


function formatDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return (`Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`);

}

const currentOneDate = new Date();
console.log(formatDate(currentOneDate));

// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

// Критерии оценки
// Работа будет оценена по следующим критериям
// Функция принимает дату и возвращает её в заданном формате: "Дата: [число] [месяц на русском] [год] — это [день недели на русском]. Время: [часы]:[минуты]:[секунды]".
// Результат работы загружен на GitHub и отправлена ссылка на pull request.
// Подсказка
// Дату и время можно получить из объекта
// Date
// .


