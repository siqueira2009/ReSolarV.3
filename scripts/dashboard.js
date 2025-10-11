let menuIcon = document.getElementById('menuContent');
let menu = document.getElementById('menu');
let diaSemana = document.getElementById('diaSemana');
let dataColeta = document.getElementById('dataColeta').innerHTML.split('/');
let dimensao = document.getElementById('dimensao').innerHTML;
let dimensaoCalculada = document.getElementById('calculada');
let linkMaps = document.getElementById('maps');
let endereco = document.getElementById('enderecoColeta').textContent;
let painelButton = document.querySelectorAll('.menuItem');
let potencia = document.getElementById('potencia').textContent;
let eficiencia = document.getElementById('eficiencia').textContent.split('%')[0];
let fabricacao = document.getElementById('fabricacao').textContent;
let condicao = document.getElementById('condicoes').textContent;
let funcionamento = document.getElementById('funcionamento').textContent;
let creditos = document.getElementById('qtdCreditos');
let porcentagemTotal = document.getElementById('porcentagem');

// Menu

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('closed');
});

// Dia de semana

let diaColeta = dataColeta[0];
let mesColeta = dataColeta[1];
let anoColeta = dataColeta[2];
let dataFormatada = anoColeta + '-' + mesColeta + '-' + diaColeta;
let dataColetaFormatada = new Date(dataFormatada);
let semana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];

diaSemana.innerHTML = semana[dataColetaFormatada.getDay()]

// Dimensão

let dimensaoDividida = dimensao.match(/\d+/g);
let calculo = dimensaoDividida[0] * dimensaoDividida[1] * dimensaoDividida[2];
dimensaoCalculada.innerHTML = `(${calculo}m³)`

// Mudar Link Google Maps

linkMaps.setAttribute('href', `https://www.google.com/maps/place/${endereco}`);

// Calcular créditos

function formulaCredtios(potencia, eficiencia, fabricacao, condicao, funcionamento) {
    let fC;
    let fF;
    let eficienciaPonto;
    let idadeAnos = 2025 - fabricacao;
    
    if (condicao == 'Inteiro') {
        fC = 1;
    } else if (condicao == 'Tricando') {
        fC = 0.6;
    } else {
        fC = 0.3;
    }

    if (funcionamento == 'Funciona') {
        fF = 1;
    } else if (funcionamento == 'Parcialmente') {
        fF = 0.5;
    } else {
        fF = 0.2;
    }

    eficienciaPonto = eficiencia/100;

    return (potencia * eficienciaPonto * (1 + 0.05 * idadeAnos) * fC * fF);
}

Array.from(painelButton).forEach(el => {
    el.addEventListener('click', () => {
        let creditosGanhos = formulaCredtios(potencia, eficiencia, fabricacao, condicao, funcionamento).toFixed();
        let porcentagem = (creditosGanhos/25) * 100;
        creditos.textContent = creditosGanhos + ' de 25';
        porcentagemTotal.textContent = '(' + porcentagem + '%)';
    })
})