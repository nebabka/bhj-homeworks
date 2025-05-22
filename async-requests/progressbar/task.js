const form = document.querySelector('form');
const progress = document.querySelector("#progress");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/upload");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload"); 
    let fd = new FormData(form);
    fd.append("digits", "1".repeat(1e7));
    xhr.send(fd);
});

xhr.upload.addEventListener("progress", function(evt) {
    if (evt.lengthComputable) {
        progress.value = evt.loaded / evt.total;
    }
});