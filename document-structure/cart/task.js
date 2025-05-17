const basket = document.querySelector('.cart__products');
const addButtons = document.querySelectorAll('.product__add');

const pluses =  document.getElementsByClassName('product__quantity-control_inc');
const minuses =  document.getElementsByClassName('product__quantity-control_dec');

Array.from(pluses).forEach(plus => {   
    plus.addEventListener('click', function() {
        // ищем значение нажатого плюса 
        let value = this.parentElement.querySelector(".product__quantity-value");
        // из строки делаем число и увеличиваем значение
        value.textContent = +(value.textContent) + 1 ;
    });
});

Array.from(minuses).forEach( minus => {
    minus.addEventListener('click', function() {
        //ищем значение нажатого минуса
        let value = this.parentElement.querySelector(".product__quantity-value");
        // если значение больше или равно единице...
        if ( +(value.textContent) >= 2) {
            // ...уменьшаем его
            value.textContent = +(value.textContent) - 1;
        }
    });
});

addButtons.forEach(addButton => {
  addButton.addEventListener('click', function() {
    const product = this.closest('.product');
    const img = product.querySelector('img');
    const valueToAdd = product.querySelector('.product__quantity-value');
    
    // элемент в корзине, соответствующий нажатой позиции
    const targetBascetProduct = basket.querySelector(`.cart__product[data-id="${product.dataset.id}"]`);
    // проверка имеется ли эта позиция в корзине
    if(targetBascetProduct) {
        // елемент с текущим значением продукта в корзине
        let countElement = targetBascetProduct.querySelector('.cart__product-count');
        // увеличиваем текущее значение продукта в корзине на выбранное число
        countElement.textContent = +(countElement.textContent) + +(valueToAdd.textContent);
        // valueToAdd.textContent = 1;
        // return;
    }
    else {
        // разметка нового продукта в корзине
        let newCartProduct = `
        <div class="cart__product" data-id="${product.dataset.id}">
            <img class="cart__product-image" src="${img.src}">
            <div class="cart__product-count">${+(valueToAdd.textContent)}</div>
        </div>
        `;
        
        //добавление продукта
        basket.insertAdjacentHTML('beforeend', newCartProduct);
    }
    // сбрасываем значение продукта в ассортименте
    valueToAdd.textContent = 1;
  });
});