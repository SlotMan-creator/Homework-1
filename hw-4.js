// TaskOne

let i = 0;
do {
    console.log('Привет!');
    i++;
} while (i <= 1);

// TaskTwo

let d = 0;
while (d < 5) {
    d++;
    console.log(d);
}

// TaskThree

let s = 6;
while (s < 22) {
    s++;
    console.log(s);
}

// TaskFour

const obj = {
    Коля: '200$',
    Вася: '300$',
    Петя: '400$'
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// TaskFive

let n = 1000;
let num = 0
while (n >= 50) {
    n /=2;
    num++;
    console.log(n);
}

console.log(`Количество циклов: ${num}`);

// TaskSix

let numberFriday = 1;

let allDay = 31;

for (let i = numberFriday; i <= allDay; i +=7)
        console.log(`Сегодня пятница, ${i}-e число.Необходимо подготовить отчет`);


