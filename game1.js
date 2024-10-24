// GameOneGuessTheNumber

// Описание игры для сайта («Угадай число»)
// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.

// Требования:

// Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.

let getRandomInRage = Math.floor(Math.random() * 100) + 1;

function guessTheNumber() {
    while (true) {
        const number = prompt('Введите число от 1 до 100');
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

console.log(getRandomInRage);
guessTheNumber();
