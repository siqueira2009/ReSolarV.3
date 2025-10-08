let menuIcon = document.getElementById('menuContent');
let menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('closed');
});