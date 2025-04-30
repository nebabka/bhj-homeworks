const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let clickerNum = 0;

cookie.addEventListener('mousedown', function() {
    clickerNum = clickerNum + 1;
    clicker.textContent = clickerNum;
    this.width *= 1.1;
});

cookie.addEventListener('mouseup', function() {
    this.width /= 1.1;
});