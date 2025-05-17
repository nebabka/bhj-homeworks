const form = document.querySelector('form');
const input = document.querySelector('input');

const list = document.querySelector('.tasks__list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // имеется ли значение у поля ввода
    if(!input.value) {
        alert('Напиши текст в строку ввода!!!!!!!!!');
        return;
    }
    if (list.innerHTML.includes(input.value)) {
        alert('Такая задача уже есть, введи другую');
        input.value = '';
        return;
    }

    // for(let tt of list.querySelectorAll(".task__title")) {
    //     if(tt.textContent === input.value) {
    //         alert('Такая задача уже есть, введи другую');
    //         input.value = '';
    //         return;    
    //     }
    // }

    // строка с разметкой новой задачи
    let newList = `
    <div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `;
    // добавление задачи на страницу в начало списка
    list.insertAdjacentHTML('afterbegin', newList);
    // сброс поля ввода
    input.value = '';

    // крестик первого элемента
    const cross = document.querySelector('.task__remove');
    // const cross = list.querySelector('.task__remove');
    
    // добавление обработчика события для удаления родителя нажатого крестика
    cross.addEventListener('click', function() { 
        this.parentElement.remove();
    });
});