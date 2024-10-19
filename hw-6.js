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

    // const num1 = Math.floor(Math.random() * 20) + 1; // Случайное число от 1 до 20
    // const num2 = Math.floor(Math.random() * 20) + 1; // Случайное число от 1 до 20
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
            // case '/':
            //     answer = num1 / num2;
            //     problemStatement = (`${num1} / ${num2} = ?`);
            //     break;
            default:
                break;
        }

    }    return { problemStatement, answer };
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



