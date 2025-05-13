const dropdownList = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const listLinks = document.querySelectorAll('.dropdown__link');


dropdownList.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

listLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownList.textContent = link.textContent;
        list.classList.remove('dropdown__list_active');
    });
});
