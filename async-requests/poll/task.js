const pollAnswers = document.querySelector('#poll__answers');
const pollTitle = document.querySelector('.poll__title');

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.onload = function (response) {
        let responseObject = JSON.parse(xhr.responseText);
        pollTitle.textContent = responseObject.data.title;

        for (let i = 0; i <= responseObject.data.answers.length - 1; i++) {
                let question = `                
        <button class="poll__answer">
        ${responseObject.data.answers[i]}
        </button>
        `; 
                pollAnswers.insertAdjacentHTML('afterbegin', question);
                let newAnswer = pollAnswers.querySelector('.poll__answer');
                newAnswer.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                });
        }
};


xhr.send();


// {
//   "id": 1,
//   "data": {
//     "title": "Ваш любимый герой?",
//     "answers": [
//       "Мистер Чеснок",
//       "Принцесса Дыня"
//     ]
//   }
// }
