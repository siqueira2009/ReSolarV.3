// Menu responsivo
let menuBtn = document.getElementById('menu');
let menu = document.getElementById('menuResp');
let navMob = document.getElementById('navMob');
let aberto = false;

menuBtn.addEventListener('click', function () {
    navMob.classList.toggle('ativo');
});