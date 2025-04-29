const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let clickerDead = 0;
let clickerLost = 0;
const hole = document.querySelector('.hole-game');

hole.addEventListener('click', (event) => {
    if (event.target.classList.contains('hole')) { 
        const holeGame = event.target;

        if (holeGame.classList.contains('hole_has-mole')){
          clickerDead++;
          dead.textContent = clickerDead;
        } else {
          clickerLost++;
          lost.textContent = clickerLost;
        } 

        if (clickerDead === 10) {
          alert('Выигрыш УРААА!!!!');
          lost.textContent = clickerLost = 0;
          dead.textContent = clickerDead = 0;
        }

        if (clickerLost === 5) {
          alert('Ты проиграл. (фу)');
          lost.textContent = clickerLost = 0;
          dead.textContent = clickerDead = 0;
        }
    }
});

