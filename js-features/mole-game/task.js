const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let clickerDead = 0;
let clickerLost = 0;
const hole = document.querySelector('.hole-game');

hole.addEventListener('click', (event) => {
    if (event.target.classList.contains('hole')) { 
        const holeGame = event.target;

        if (holeGame.classList.contains('hole_has-mole')){
          clickerLost++;
          dead.textContent = clickerLost;
        } else {
          clickerDead++;
          lost.textContent = clickerDead;
        } 

        if (clickerLost === 10) {
          alert('Выигрыш УРААА!!!!');
          lost.textContent = clickerLost = 0;
          dead.textContent = clickerDead = 0;
        }

        if (clickerDead === 5) {
          alert('Ты проиграл. (фу)');
          lost.textContent = clickerLost = 0;
          dead.textContent = clickerDead = 0;
        }
    }
});

