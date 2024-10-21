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
    console.log(numbers[i]);
    if (numbers[i] == 10) break;

}

//  Задание 2
//  Дан массив: 
//  [1, 5, 4, 10, 0, 3]
//  .

//  Найдите индекс значения 
//  4
//   в этом массиве.

const numb = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numb.length; i++) {
    if (numb[i] === 4) {
        console.log(i);
        break;
    }

}


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
let arrSplit = arr.join(' ');
console.log(arrSplit);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
// .

const arr1 = [];
for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
    }
    arr1.push(arr2);
}

console.log(arr1);

// Задание 5
// Дан массив: 
// [1, 1, 1]
// . Добавьте в конец массива значения 2, 2, 2.

const ones = [1, 1, 1];
ones.push(2, 2, 2);
console.log(ones);

// Задание 6
// Дан массив: 
// [9, 8, 7, 'a', 6, 5]
// .

// С помощью метода 
// sort
//  отсортируйте массив и удалите букву 
// 'a'
//  из массива. Затем выведите массив.

const data = [9, 8, 7, 'a', 6, 5];
data.sort();
data.pop();
console.log(data);

// Задание 7
// Дан массив: 
// [9, 8, 7, 6, 5]
// .

// Попросите пользователя угадать число с помощью метода 
// prompt
// . Если значение, которое ввел пользователь, есть в массиве, выведите в 
// alert
//  «Угадал», в противном случае — «Не угадал».

const values = [9, 8, 7, 6, 5];
const userNumber = +prompt("ВВедите число от 1 до 10");
if (values.includes(userNumber)) {
    alert('Угадал')
} else {
    alert('не угадал!')
}

// Задание 8
// Дана строка: 
// 'abcdef'
// . Выведите в консоль 
// 'fedcba'
// .

let str = 'abcdef';
str = str.split('');
console.log(str);
str.reverse();
str = str.join('');
console.log(str);

// Задание 9
// Дан массив: 
// [[1, 2, 3],[4, 5, 6]]
// . Выведите в консоль массив вида: 
// [1, 2, 3, 4, 5, 6]
// .

const non = [[1, 2, 3], [4, 5, 6]];
const newNon = [];
for (let i = 0; i < non.length; i++) {
    newNon.push(...non[i])
}

console.log(newNon);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 
// 1
//  до 
// 10
// ).
// Переберите его с помощью цикла 
// for
// .
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: 
// i + 1
// . Обратите внимание, что у последнего элемента нет следующего.

const base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < base.length; i++) {
    if (base[i + 1]) {
        console.log(base[i] + base[i + 1]);
    }
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел,
//  а возвращает массив квадратов этих чисел.

function square(params) {
    return params.map(item => item ** 2);
}

console.log(square([1, 2, 3]));

// Задание 12
// Создайте функцию, которая принимает на вход массив строк,
//  а возвращает массив длины слов.

function getLength(mass) {
    return mass.map(item => item.length);
}

console.log(getLength(['zdarova', 'world']));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел,
//  а возвращает массив, содержащий только отрицательные значения.

function negativeNUmbers(array) {
    return array.filter(item => item < 0);
}

console.log(negativeNUmbers([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо 
// сгенерировать с помощью метода 
// Math.random()
//  в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый 
// массив. Результат работы программы необходимо вывести в консоль —
//  это будут два массива: исходный массив и массив с четными значениями.

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const random = [];

for (let i = 0; i < 10; i++) {
    random.push(randomNumber());
}

console.log(random);

const parityArr = [];

for (let i = 0; i < random.length; i++) {
    if (random[i] % 2 === 0) {
        parityArr.push(random[i]);
    }
}

console.log(parityArr);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// Math.random()
//  в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

function randomNumbers() {
    return Math.floor(Math.random() * 10);
}

const block = [];

for (let i = 0; i < 10; i++) {
    block.push(randomNumbers());
}

console.log(block);
console.log(block.reduce((a, b) => a + b) / block.length);












