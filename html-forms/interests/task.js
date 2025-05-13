const mainElements = document.querySelectorAll('.interests_main > ul > li.interest > label');
const foodMainLabel = mainElements[0];
const petsMainLabel = mainElements[1];
const foodMainCheckbox = foodMainLabel.querySelector('input[type="checkbox"]'); 
const petsMainCheckbox = petsMainLabel.querySelector('input[type="checkbox"]');


const foodElements = document.querySelectorAll('.interests_main > ul > li.interest:nth-child(1) > ul > li.interest > label > input[type="checkbox');
const petsElements = document.querySelectorAll('.interests_main > ul > li.interest:nth-child(2) > ul > li.interest > label > input[type="checkbox');

foodMainCheckbox.addEventListener('change', () => {
    foodElements.forEach(food => food.checked = foodMainCheckbox.checked);
});

petsMainCheckbox.addEventListener('change', () => {
    petsElements.forEach(pets => pets.checked = petsMainCheckbox.checked);
});

foodElements.forEach(food => {
    food.addEventListener('change', () => {
        foodMainCheckbox.checked = Array.from(foodElements).every(food => food.checked);
    });
});

petsElements.forEach(pets => {
    pets.addEventListener('change', () => {
        petsMainCheckbox.checked = Array.from(petsElements).every(pets => pets.checked);
    })
});