const links = document.querySelectorAll('.font-size');
const books = document.querySelectorAll('.book__content');

function remove() {
    books.forEach(book => {
        book.classList.remove('font-size_small');
        book.classList.remove('font-size_big');
    });
};

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        remove();

        if(link.classList.length > 1){
        books.forEach(book => book.classList.add(link.classList[1]));
        };
    });
});