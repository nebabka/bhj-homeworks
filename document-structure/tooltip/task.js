const haveHints = document.querySelectorAll('.has-tooltip');
let lastHint = null;

haveHints.forEach(haveHint => {
    let hint = `
        <div class="tooltip" title="${haveHint.title}">
            ${haveHint.title}
        </div>
    `;
    haveHint.insertAdjacentHTML('afterend', hint);
    haveHint.addEventListener('click', function (event) {
        event.preventDefault();
        if (lastHint){
            lastHint.classList.remove('tooltip_active');
        }

        this.nextElementSibling.style.left = this.getBoundingClientRect().left + "px";
        this.nextElementSibling.style.position = "absolute";
        this.nextElementSibling.classList.toggle("tooltip_active");
        lastHint = this.nextElementSibling;
    });
});