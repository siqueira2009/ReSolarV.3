// Barra

let etapas = document.getElementsByClassName('etapa');
let btns = document.getElementsByClassName('opt');
let barra =  document.getElementById('barraVerde');
let index = document.getElementsByClassName('index');

function mudarEtapa(click) {
    Array.from(etapas).forEach(element => {
        element.style.display = 'none';
    });
    Array.from(btns).forEach(element => {
        element.classList.remove('atual');
    });
    etapas[click].style.display = 'flex';
    btns[click].classList.add('atual');

    switch (click) {
            case 0:
                barra.style.width = '25%';
                index.innerHTML = '1/4';
                break;
            case 1:
                barra.style.width = '50%';
                index.innerHTML = '2/4';
                break;  
            case 2:
                barra.style.width = '75%';
                index.innerHTML = '3/4';
                break;
            case 3:
                barra.style.width = '100%'
                index.innerHTML = '4/4';
                break;
    }
}

// Select

let select = document.querySelectorAll('select');

Array.from(select).forEach(el => el.addEventListener('change', () => {
    if (el.value != "") {
        el.style.color = '#333333';
        el.style.fontStyle = 'normal';
    } else {
        el.style.color = '#696969';
        el.style.fontStyle = 'italic';
    }
}));

// Data

let inputsData = document.querySelectorAll('.typeDate');

Array.from(inputsData).forEach(el => el.addEventListener('change', () => {
    if (el.value != "") {
        el.style.color = '#333333';
        el.style.fontStyle = 'normal';
    } else {
        el.style.color = '#696969';
        el.style.fontStyle = 'italic';
        el.style.boxShadow = 'none';
    }
}));

// Calendário

let calendario = document.querySelector('#dias')

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
let inputEndereco = document.getElementById('endereco');
let resumoColeta = document.getElementById('resumoColeta');
let resumoSpan = resumoColeta.querySelectorAll('span');

const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function gerarCalendario(mes, ano) {
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
        hoje.setDate(hoje.getDate() + 4);
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
                inputData.value = `${ano}-${String(mes+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
                inputData.dispatchEvent(new Event("change"));
                resumoColeta.scrollIntoView({behavior: "smooth"})
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
    if (mesControle != 4) {
        mesControle++;
        if (mesControle > 11) { mesControle = 0; anoControle++; }
        gerarCalendario(mesControle, anoControle);
        mesElem.innerHTML = monthNames[mesControle];
        anoElem.innerHTML = String(anoControle);
    }
});

prev.addEventListener("click", function(){
    if (mesControle != 6) {
        mesControle--;
        if (mesControle < 0) { mesControle = 11; anoControle--; }
        gerarCalendario(mesControle, anoControle);
        mesElem.innerHTML = monthNames[mesControle];
        anoElem.innerHTML = String(anoControle);
    }
});

document.addEventListener('DOMContentLoaded', () => {


    Array.from(select).forEach(el => {
        if (el.value != "") {
            el.style.color = '#333333';
            el.style.fontStyle = 'normal';
        } else {
            el.style.color = '#696969';
            el.style.fontStyle = 'italic';
        }
    })

    Array.from(inputsData).forEach(el => {
        if (el.value != "") {
            el.style.color = '#333333';
            el.style.fontStyle = 'normal';
        } else {
            el.style.color = '#696969';
            el.style.fontStyle = 'italic';
        }
    })

    if (inputEndereco.value != "") {
        resumoSpan[1].innerHTML = inputEndereco.value;
    }

    const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    const mesElemLocal = document.getElementById('mesAtual');
    const anoElemLocal = document.getElementById('anoAtual');
    resumoSpan[0].innerHTML = inputData.value;

    if (typeof mesControle === 'undefined') mesControle = mesA;
    if (typeof anoControle === 'undefined') anoControle = anoA;

    if (inputData.value && inputData.value !== "") {
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

    if (inputData.value == "") {
        resumoColeta.style.display = 'none'
    }

    gerarCalendario(mesControle, anoControle);
    mesElemLocal.innerHTML = monthNames[mesControle];
    anoElemLocal.innerHTML = String(anoControle);
});

inputData.addEventListener('change', () => {
    resumoSpan[0].innerHTML = new Date(inputData.value).toLocaleDateString('pt-BR');
    resumoColeta.style.display = 'block';
})

inputEndereco.addEventListener('keyup', () => {
    resumoSpan[1].innerHTML = inputEndereco.value
    resumoColeta.style.display = 'block';
})

// Homepage/Dashboard

let buttonHomepage = document.getElementsByClassName('homepage')

Array.from(buttonHomepage).forEach(el => {
    el.addEventListener('click', () => {
        window.location.href = '../../index.html'
    })
})

// Enviar sem value

let concluir = document.getElementById('concluir');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let selects = document.querySelectorAll('select');
let dias = document.getElementsByClassName('dia');
let valoresPadroes = [
    'ReSolar BQ',
    'GL091025-1015',
    550,
    '2023-04-08',
    '2024-03-18',
    '60',
    'Apresenta baixa eficiência',
    43.76,
    13.71,
    22.22,
    '20x20x2',
    13.71,
    '30/10/2025',
    'Av. Orosimbo Maia, 2600 - Cambuí, Campinas - SP, 13024-045'
];
let optionsPadroes = [
    'Monocristalino',
    'Funciona',
    'Inteiro',
    'Troca',
    'On-Grid'
]

concluir.addEventListener('click', () => {
    inputs[3].style.color = '#333333';
    inputs[4].style.color = '#333333';
    inputs[3].style.fontStyle = 'normal';
    inputs[4].style.fontStyle = 'normal';

    Array.from(inputs).forEach((el, i) => {
        if (el.value == "" && el.id != 'dataColeta') {
            el.value = valoresPadroes[i];
        } else if (el.id == 'dataColeta' && el.value == "") {
            document.getElementsByClassName('dia')[30].click();
        }
    });

    Array.from(selects).forEach((el, i) => {
        if (el.value == "" ) {
            el.value = optionsPadroes[i];
            el.style.color = '#333333';
            el.style.fontStyle = 'normal';
        }
    });
});

// Data inválida

let datas = document.getElementsByClassName('typeDate');

Array.from(datas).forEach(el => {
    el.addEventListener('change', () => {
        if (el.value === "") {
            el.classList.remove('invalid');
        } else {
            if (!el.checkValidity()) {
                el.classList.add('invalid');
            } else {
                el.classList.remove('invalid');
            }
        }
    });
});
