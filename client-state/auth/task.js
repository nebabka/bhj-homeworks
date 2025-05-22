const signin = document.querySelector('.signin')
const form = document.querySelector('form');

const welcome = document.querySelector('.welcome');
const userId = document.querySelector('#user_id');

if(localStorage.getItem('id')) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('id');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    xhr.onload = function() {
        let responseObject = JSON.parse(xhr.responseText);

        if(responseObject.success == true) {
            signin.classList.remove('signin_active');

            welcome.classList.add('welcome_active');
            userId.textContent += responseObject.user_id;

            localStorage.setItem('id', userId.textContent);
        }else{
            alert('Неверный логин/пароль');
        }
    };

    const formData = new FormData(form);
    xhr.send(formData);
});

// {
//   "success": true,
//   "user_id": 123 
// }