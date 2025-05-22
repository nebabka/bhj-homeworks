const inputLine = document.querySelector('#editor');

function saveText() {
    localStorage.setItem('text', inputLine.value);
};

function loadText() {
    if(localStorage.getItem('text')){
        inputLine.value = localStorage.getItem('text');
    }
};

inputLine.addEventListener('input', saveText);
loadText();