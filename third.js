let count = 0;
const counterElement = document.getElementById('counter');

const intervalId = setInterval(() => {
    count += 1;
    counterElement.textContent = count;

    if (count === 5) {
        clearInterval(intervalId);
        console.log('종료');
    }
}, 1000);
