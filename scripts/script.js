// Rodar quando o documento inicializa
let opcoes = document.getElementsByClassName("option");
let opcoesResp = document.getElementsByClassName("optionResp");
opcoes[0].classList.toggle('selected');
opcoesResp[0].classList.toggle('selected');

// Menu responsivo
let menuBtn = document.getElementById('menu');
let menu = document.getElementById('menuResp');
let navMob = document.getElementById('navMob');
let aberto = false;

menuBtn.addEventListener('click', function () {
    navMob.classList.toggle('ativo');
});

// Funcionamento
function opt(clicado, tipo) {

    if (tipo == 'normal') {
        for(var x = 0; x < opcoes.length; x++) {
            opcoes[x].classList.remove('selected');
        }
    
        opcoes[clicado].classList.toggle('selected');
    } else if (tipo =='mobile') {
        for(var x = 0; x < opcoesResp.length; x++) {
            opcoesResp[x].classList.remove('selected');
        }
    
        opcoesResp[clicado].classList.toggle('selected');
    }

}