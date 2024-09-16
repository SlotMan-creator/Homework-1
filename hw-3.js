// TaskOne

let password = 1024599;
let dataEntry = Number(prompt('Введите пароль'));
console.log(password === dataEntry ? 'Пароль введен верно' : 'Пароль введен неправильно');

// TaskTwo

let c = 7;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let c1 = 0;
if (c1 > 0 && c1 < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let c2 = 10;
if (c2 > 0 && c2 < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let c3 = -3;
if (c3 > 0 && c3 < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let c4 = 2;
if (c4 > 0 && c4 < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// TaskThree

let d = 55;
let e = 211;
console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

// TaskFour

let a = '2';
let b = '3';
console.log(Number(a) + Number(b));

// TaskFive

let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
        console.log('Этот месяц принадлежит к сезону "Зима"');
        break;
    case 2:
        console.log('Этот месяц принадлежит к сезону "Зима"');
        break;
    case 3:
        console.log('Этот месяц принадлежит к сезону "Весна"');
        break;
    case 4:
        console.log('Этот месяц принадлежит к сезону "Весна"');
        break;
    case 5:
        console.log('Этот месяц принадлежит к сезону "Весна"');
        break;
    case 6:
        console.log('Этот месяц принадлежит к сезону "Лето"');
        break;
    case 7:
        console.log('Этот месяц принадлежит к сезону "Лето"');
        break;
    case 8:
        console.log('Этот месяц принадлежит к сезону "Лето"');
        break;
    case 9:
        console.log('Этот месяц принадлежит к сезону "Осень"');
        break;
    case 10:
        console.log('Этот месяц принадлежит к сезону "Осень"');
        break;
    case 11:
        console.log('Этот месяц принадлежит к сезону "Осень"');
        break;
    case 12:
        console.log('Этот месяц принадлежит к сезону "Зима"');
        break;
    default:
        console.log('Ты что,не умеешь считать до 12?В году именно столько месяцев!');
        break;
}