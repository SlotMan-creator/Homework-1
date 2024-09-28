// GameOneGuessTheNumber

function getRandomInRage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRage(1, 100));


// Задание 1
// Напишите функцию, которая возвращает меньшее из двух чисел.

// Например, из двух чисел — 8 и 4 — функция должна вернуть значение 4.
// Если мы передаем два одинаковых значения, например 6 и 6
// , то функция должна вернуть это значение (в данном случае — 6).

function min(a ,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));





