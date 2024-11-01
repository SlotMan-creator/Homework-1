// GameOneGuessTheNumber

// Описание игры для сайта («Угадай число»)
// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.

// Требования:

// Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.

let getRandomInRage;
function initializeGame() {
    getRandomInRage = Math.floor(Math.random() * 100) + 1;
    console.log(`Случайное число: ${getRandomInRage}`);
}

function guessTheNumber() {
    while (true) {
        const number = prompt('Введите число от 1 до 100');

        if (number === null) {
            alert('Игра отменена.');
            break;
        }

        let userNumber = Number(number);

        if (userNumber < getRandomInRage) {
            alert('Больше!');
            continue;
        }

        if (userNumber > getRandomInRage) {
            alert('Меньше!');
            continue;
        }

        if (userNumber === getRandomInRage) {
            alert('Вы угадали число!Поздравляю!')
            break;
        }

    }
}

document.getElementById('startGameOneButton').addEventListener('click', function () {
    initializeGame();
    guessTheNumber();
});


// Основное задание по верстке макета
// Реализуйте связь с сайтом для второй игры.
// Создайте игру, где пользователю предлагаются простые арифметические задачи
// Требования
// Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ.
// Проверяет правильность ответа и выводит результат.
// Последовательность действий
//  Генерация задач:
// Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//  Запрос ответа:
// Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя функцию 
// prompt()
// .
//  Проверка и вывод результата:
// Проверьте правильность ответа пользователя.
// Выведите результат проверки: верный ответ или ошибка.

function generateRandomProblem() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let answer;
    let problemStatement;
    let num1;
    let num2;

    if (operator === '/') {
        // Убедимся, что num1 кратен num2
        num2 = Math.floor(Math.random() * 20) + 1; // Случайное число от 1 до 20
        // Генерируем num1 как кратное num2
        num1 = num2 * (Math.floor(Math.random() * 20) + 1); // num1 кратно num2
        answer = num1 / num2;
        problemStatement = (`${num1} / ${num2} = ?`);
    } else {
        num1 = Math.floor(Math.random() * 20) + 1; // Случайное число от 1 до 20
        num2 = Math.floor(Math.random() * 20) + 1; // Случайное число от 1 до 20

        switch (operator) {
            case '+':
                answer = num1 + num2;
                problemStatement = (`${num1} + ${num2} = ?`);
                break;
            case '-':
                answer = num1 - num2;
                problemStatement = (`${num1} - ${num2} = ?`);
                break;
            case '*':
                answer = num1 * num2;
                problemStatement = (`${num1} * ${num2} = ?`);
                break;
            default:
                break;
        }

    } return { problemStatement, answer };
}

function startQuiz() {
    const { problemStatement, answer } = generateRandomProblem();
    const userAnswer = prompt(problemStatement);

    if (userAnswer === null) {
        alert("Игра отменена");
        return;
    }

    const parsedAnswer = parseFloat(userAnswer);

    if (parsedAnswer === answer) {
        alert("Верно! Угадали.");
    } else {
        alert(`Ошибка! Правильный ответ: ${answer}`);
    }

}

document.getElementById('startGameTwoButton').addEventListener('click', function () {
    startQuiz();
})

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
        console.log(`Ваш перевернутый текст: ${reversed}`);
    }

    if (text === null) {
        console.log('Игра отменена');
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
