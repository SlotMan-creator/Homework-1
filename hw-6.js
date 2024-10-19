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
        num2 = Math.floor(Math.random() * 20) + 1; // Случайное число от 1 до 20
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
    const userAnswer = parseFloat(prompt(problemStatement));

    if (userAnswer === answer) {
        alert("Верно! Угадали.");
    } else {
        alert(`Ошибка! Правильный ответ: ${answer}`);
    }

}

startQuiz();

// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// .

// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10
// . После вывода значения 
// 10
//  в консоль цикл должен прекратить свою работу.

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) break;
    console.log(numbers[i]);
}

//  Задание 2
//  Дан массив: 
//  [1, 5, 4, 10, 0, 3]
//  .

//  Найдите индекс значения 
//  4
//   в этом массиве.

const numb = [1, 5, 4, 10, 0, 3];
numb.forEach((el, index) => {
    console.log(`${index}: ${el}`);
});

//  Задание 3
// Дан массив чисел:
// [1, 3, 5, 10, 20]
// .

// С помощью метода
// join
//  выведите элементы массива через пробел (пустую строку
// ' '
// ).

const arr = [1, 3, 5, 10, 20];


