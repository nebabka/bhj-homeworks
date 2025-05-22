const mailing = document.querySelector('.modal');
const mailingClose = document.querySelector('.modal__close');

if(document.cookie.indexOf('remove=') > -1) {
    mailing.classList.remove('modal_active');
}else{
    setTimeout(function() {
    mailing.classList.add('modal_active');
}, 5000);
}

mailingClose.addEventListener('click', () => {
    mailing.classList.remove('modal_active');
    document.cookie = 'remove=' + encodeURIComponent(true) + '; SameSite=Strict';
});
