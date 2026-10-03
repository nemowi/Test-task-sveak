const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

const cards = document.querySelector('.content__cards');
cards.addEventListener('click', (e) => {
    const card = e.target.closest('.content__card');
    if(card) {
        card.classList.add('spin');
    }
});

cards.addEventListener('animationend', (e) => {
    e.target.classList.remove('spin');
});