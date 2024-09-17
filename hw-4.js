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
while (n > 50) {
    n /=2;
    num++;
    console.log(n);
    console.log(num);
}

// TaskSix

for (let numberFriday = 1; numberFriday <=5; numberFriday++) {
    if (numberFriday ===1) {
        console.log('Сегодня пятница,первое число.Необходимо подготовить отчет');
    } else if (numberFriday ===2) {
        console.log('Сегодня пятница,восьмое число.Необходимо подготовить отчет');
    } else if (numberFriday ===3) {
        console.log('Сегодня пятница,пятнадцатое число.Необходимо подготовить отчет');
    } else if (numberFriday ===4) {
        console.log('Сегодня пятница,двадцать второе число.Необходимо подготовить отчет');
    } else if (numberFriday ===5) {
        console.log('Сегодня пятница,двадцать девятое число.Необходимо подготовить отчет');
    }
}

// Так ли я понял шестую задачу или же все-таки что-то здесь по другому?)
