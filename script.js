document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('btn');
    const displayText = document.getElementById('title');

    button.addEventListener('click', function () {
        displayText.textContent = '제목 아니다';
    });
});

function sum(num1, num2) {
    console.log(num1 + num2);
}

// sum(3, 5);

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log('짝수입니다');
    } else {
        console.log('홀수입니다');
    }
}

// isEvenOrOdd(4);

let name = '병수';
let age = 30;
console.log(`%c이름: ${name}\n%c나이: ${age}`, 'border-bottom: 1px solid black;', '');
