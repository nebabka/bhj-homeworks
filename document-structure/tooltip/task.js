const haveHints = document.querySelectorAll('.has-tooltip');
let lastHint = null;

haveHints.forEach(haveHint => {
    let hint = `
        <div class="tooltip" title="${haveHint.title}">
            ${haveHint.title}
        </div>
    `;
    haveHint.insertAdjacentHTML('afterend', hint);
    // haveHint.addEventListener('click', function (event) {
    //     event.preventDefault();
        
    //     if (lastHint){
    //         lastHint.classList.remove('tooltip_active');
    //     }

    // });
    haveHint.addEventListener('click', function (event) {
        event.preventDefault();
        // if(!lastHint) {
        //     this.nextElementSibling.style.left = this.getBoundingClientRect().left + "px";
        //     this.nextElementSibling.style.position = "absolute";
        //     this.nextElementSibling.classList.toggle("tooltip_active");
        //     lastHint = this.nextElementSibling;
        //     return;
        // }
        
        if(lastHint && Object.is(this.nextElementSibling, lastHint)) {
            lastHint.classList.toggle("tooltip_active");
            return;
        } else if(lastHint){
            lastHint.classList.remove("tooltip_active");
        }
        
        this.nextElementSibling.style.left = this.getBoundingClientRect().left + "px";
        this.nextElementSibling.style.position = "absolute";
        this.nextElementSibling.classList.toggle("tooltip_active");
        lastHint = this.nextElementSibling;
    });
});