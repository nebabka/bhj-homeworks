const items = document.querySelector('#items');
const loadImg = document.querySelector('.loader');

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.onload = function() {
    let responseObject = JSON.parse(xhr.responseText);
    loadImg.classList.remove('loader_active');
    for(let v of Object.values(responseObject.response.Valute)) {
        let newItem = `
        <div class="item">
            <div class="item__code">
                ${v.CharCode}
            </div>
            <div class="item__value">
                ${v.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `;   
        items.insertAdjacentHTML('beforeend', newItem);
    }
};

xhr.send();


// 
/* 
<div class="item">
    <div class="item__code">
        USD
    </div>
    <div class="item__value">
        32
    </div>
    <div class="item__currency">
        руб.
    </div>
</div>
*/

// {
//   "date": "2019-02-18 14:30:56",
//   "response": {
//     "Date": "2019-02-19T11:30:00+03:00",
//     "PreviousDate": "2019-02-16T11:30:00+03:00",
//     "PreviousURL": "//www.cbr-xml-daily.ru/archive/2019/02/16/daily_json.js",
//     "Timestamp": "2019-02-18T17:00:00+03:00",
//     "Valute": {
//       "AUD": {
//         "ID": "R01010",
//         "NumCode": "036",
//         "CharCode": "AUD",
//         "Nominal": 1,
//         "Name": "Австралийский доллар",
//         "Value": 47.3467,
//         "Previous": 47.2801
//       },
//       "AZN": {
//         "ID": "R01020A",
//         "NumCode": "944",
//         "CharCode": "AZN",
//         "Nominal": 1,
//         "Name": "Азербайджанский манат",
//         "Value": 39.0492,
//         "Previous": 39.3188
//       }
//     }
//   }
// }