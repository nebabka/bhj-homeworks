const rotators = document.querySelectorAll('.rotator__case');
let rotatorIndex = 0;

function interval() {
    rotators[rotatorIndex].classList.remove('rotator__case_active');
    rotatorIndex = (rotatorIndex + 1) % rotators.length;
    rotators[rotatorIndex].classList.add('rotator__case_active');
};

setInterval(interval, 1000);