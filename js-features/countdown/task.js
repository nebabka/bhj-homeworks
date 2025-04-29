const timer = document.getElementById("timer");
let timeValue = parseInt(timer.textContent, 10);

function counter() {
    timeValue--;
    timer.textContent = timeValue;

    if (timeValue === 0) {
       alert("Вы победили в конкурсе!");
       clearInterval(timerId);
    };
};

const timerId = setInterval(counter, 1000);