const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let clickerNum = 0;

const cookieSpeed = document.getElementById("clicker__speed");
let lastTime = new Date();

cookie.addEventListener('mousedown', function() {
    clickerNum = clickerNum + 1;
    clicker.textContent = clickerNum;

    let clickerTime = new Date();
    cookieSpeed.textContent = Math.round(1000 / (clickerTime - lastTime) * 100) / 100;
    lastTime = clickerTime;

    this.width *= 1.1;
});

cookie.addEventListener('mouseup', function() {
    this.width /= 1.1;
});