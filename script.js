// Declarations
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


// EventListeners
open.addEventListener('click', () => {
    open.style.display = "none";
    close.style.display = "block";
    container.classList.add('show-nav');

});

close.addEventListener('click', () => {
    close.style.display = "none";
    open.style.display = "block";
    container.classList.remove('show-nav');
});