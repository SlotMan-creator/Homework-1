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
