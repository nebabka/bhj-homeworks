const menuLinks = document.querySelectorAll('.menu_main > .menu__item > .menu__link');

for(let link of menuLinks) {
     link.addEventListener("click", function(event) {
         const previousList = document.querySelector(".menu_sub.menu_active");
         const list = this.parentElement.querySelector('.menu_sub');
        
         if(previousList) {
             previousList.classList.toggle('menu_active');
             if(Object.is(list, previousList)) {
                 event.preventDefault();
                 return;
             }
         }

         if(!list) {
             return;
         }
         event.preventDefault();
         list.classList.toggle('menu_active');
     });
};