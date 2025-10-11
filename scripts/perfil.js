// Variáveis

let saudacoes = document.getElementById('bom');
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let nomeSaudacoes = document.getElementById('nomeSaudacoes');
let nomeInput = document.getElementById('nome').value
let primeiroNome = nomeInput.split(' ')[0];
let cpf = document.getElementById('cpf');
let cpfContent = cpf.value;
let valueCpf = cpfContent;
let tamanhoEscondidoCpf = ((50 * cpfContent.length) / 100).toFixed()
let parteVisivelCpf = cpfContent.slice(0, -tamanhoEscondidoCpf);
let parteInvisivelCpf = '*'.repeat(tamanhoEscondidoCpf);
let cpfEscondido = parteVisivelCpf + parteInvisivelCpf;
let inputs = document.querySelectorAll('.input');
let senhaIcon = document.getElementById('verSenha');
let inputSenha = document.getElementById('senha');
let imgPerfil = document.getElementById('imgPerfil');

// Saudações

if (horaAtual >= 5 && horaAtual < 12) {
    saudacoes.innerHTML = 'Bom dia'
} else if (horaAtual >= 12 && horaAtual < 18) {
    saudacoes.innerHTML = 'Boa tarde'
} else {
    saudacoes.innerHTML = 'Boa noite'
}

nomeSaudacoes.innerHTML = primeiroNome

// Esconder CPF

if (cpfContent.length == 14) {
    parteInvisivelCpf = parteInvisivelCpf.replace('*******', '.***-**')
} else {
    parteInvisivelCpf = parteInvisivelCpf.replace('*********', '*/****-**')
}

cpf.value = cpfEscondido;

// Editar informações

Array.from(inputs).forEach(el => {
    let oldValue = el.value;
    
    el.addEventListener('focus', () => {
        oldValue = el.value;
    });
    
    el.addEventListener('blur', () => {
        if (el.value.trim() === "") {
            el.value = oldValue;
        }
    });
});

// Ver senha

senhaIcon.addEventListener('click', () => {
    if (inputSenha.type == 'password') {
        inputSenha.type = 'text'
        senhaIcon.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        inputSenha.type = 'password'
        senhaIcon.classList.replace('fa-eye-slash', 'fa-eye')
    }
})

// Alterar avatar

let alteracoesPerfil = 0;

imgPerfil.addEventListener('click', () => {
    if (alteracoesPerfil == 0) {
        imgPerfil.style.backgroundImage = 'url("../../imgs/SVGs/Avatares/Profile_2.svg")'

        alteracoesPerfil++;
    } else if (alteracoesPerfil == 1) {
        imgPerfil.style.backgroundImage = 'url("../../imgs/SVGs/Avatares/Profile_3.svg")'

        alteracoesPerfil++;
    } else if (alteracoesPerfil == 2) {
        imgPerfil.style.backgroundImage = 'url("../../imgs/SVGs/Avatares/Profile_1.svg")'

        alteracoesPerfil = 0;
    }
})