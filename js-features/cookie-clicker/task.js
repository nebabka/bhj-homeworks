const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let clickerNum = 0;

cookie.addEventListener('click', () => {
    clickerNum = clickerNum + 1;
    clicker.textContent = clickerNum;
});