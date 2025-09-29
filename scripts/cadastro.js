let etapas = document.getElementsByClassName('etapa');
let btns = document.getElementsByClassName('opt');
let barra =  document.getElementById('barraVerde');

function mudarEtapa(click) {
    Array.from(etapas).forEach(element => {
        element.style.display = 'none';
    });
    Array.from(btns).forEach(element => {
        element.classList.remove('atual');
    });
    etapas[click].style.display = 'flex';
    btns[click].classList.add('atual');
    
    switch (click){
        case 0:
            barra.style.width = '33%';
            break;
            case 1:
                barra.style.width = '66%';
                break;  
        case 2:
            barra.style.width = '100%';
            break;
        }
}

// Calendário

let calendario = document.querySelector('.dias')

let hoje = new Date();
let mesA = hoje.getMonth();
let anoA = hoje.getFullYear();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let mesElem = document.getElementById('mesAtual');
let anoElem = document.getElementById('anoAtual');
let mesControle = mesA;
let anoControle = anoA;
let diaSelecao = null;
let mesSelecao = null;
let inputData = document.getElementById('dataColeta');
let resumoColeta = document.getElementById('resumoColeta');
let resumoSpan = resumoColeta.querySelectorAll('span');

const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function gerarCalendario(mes, ano) {
    console.log("MÊS > " + mesSelecao);
    console.log("MÊS (parâmetro) > " + mes);
    console.log("DIA > " + diaSelecao);

    calendario.innerHTML = "";
    
    let primeiroDia = new Date(ano, mes, 1).getDay();
    let totalDias = new Date(ano, mes + 1, 0).getDate();
    
    for (let i = 0; i < primeiroDia; i++) {
        espaco = document.createElement("div");
        espaco.classList.add('nada');
        calendario.appendChild(espaco);
    }
    
    for (let i = 1; i <= totalDias; i++) {
        let dia = document.createElement("div");
        dia.classList.add('dia');
        dia.textContent = i;
        
        let dataAtual = new Date(ano, mes, i);
        let hoje = new Date();
        hoje.setDate(hoje.getDate() + 7);
        hoje.setHours(0,0,0,0);
        
        if (dataAtual < hoje) {
            dia.classList.add('desabilitado');
        } else {
            dia.addEventListener('click', () => {
                document.querySelectorAll(".dia").forEach(el => el.classList.remove("selecionado"));
                dia.classList.add("selecionado");
                diaSelecao = i - 1;
                mesSelecao = mes;
                const dd = String(i).padStart(2, '0');
                const mm = String(mes + 1).padStart(2, '0');
                inputData.value = `${dd}/${mm}/${ano}`;
                inputData.dispatchEvent(new Event("change"));
            });
        }
        calendario.appendChild(dia);
    }

    if (mesSelecao == mes) {
        document.querySelectorAll(".dia").forEach(el => el.classList.remove("selecionado"));
        document.querySelectorAll(".dia")[diaSelecao].classList.add("selecionado");

        console.log("Mês da seleção.")
    }
}

next.addEventListener("click", function(){
    mesControle++;
    if (mesControle > 11) { mesControle = 0; anoControle++; }
    gerarCalendario(mesControle, anoControle);
    mesElem.innerHTML = monthNames[mesControle];
    anoElem.innerHTML = String(anoControle);
});

prev.addEventListener("click", function(){
    mesControle--;
    if (mesControle < 0) { mesControle = 11; anoControle--; }
    gerarCalendario(mesControle, anoControle);
    mesElem.innerHTML = monthNames[mesControle];
    anoElem.innerHTML = String(anoControle);
});

document.addEventListener('DOMContentLoaded', () => {
    const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    const mesElemLocal = document.getElementById('mesAtual');
    const anoElemLocal = document.getElementById('anoAtual');
    resumoSpan[0].innerHTML = inputData.value;

    if (typeof mesControle === 'undefined') mesControle = mesA;
    if (typeof anoControle === 'undefined') anoControle = anoA;

    if (inputData.value && inputData.value !== "--/--/----") {
        const parts = inputData.value.split('/');
        if (parts.length === 3) {
            const inputDia = parseInt(parts[0], 10);
            const inputMes = parseInt(parts[1], 10) - 1;
            const inputAno = parseInt(parts[2], 10);
            diaSelecao = inputDia - 1;
            mesSelecao = inputMes;

            if (!isNaN(inputMes) && !isNaN(inputAno)) {
                mesControle = inputMes;
                anoControle = inputAno;

                gerarCalendario(mesControle, anoControle);

                document.querySelectorAll(".dia").forEach(el => el.classList.remove("selecionado"));
                const dayEl = Array.from(document.querySelectorAll('.dia')).find(el => Number(el.textContent) === inputDia);
                if (dayEl) dayEl.classList.add("selecionado");

                mesElemLocal.innerHTML = monthNames[mesControle];
                anoElemLocal.innerHTML = String(anoControle);

                return;
            }
        }
    }

    gerarCalendario(mesControle, anoControle);
    mesElemLocal.innerHTML = monthNames[mesControle];
    anoElemLocal.innerHTML = String(anoControle);
});

inputData.addEventListener('change', () => {
    resumoSpan[0].innerHTML = inputData.value;
})