let saudacoes = document.getElementById('bom');
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();

let cpf = document.getElementById('cpf');
let cpfContent = cpf.value;
let valueCpf = cpfContent;

// Saudações

if (horaAtual > 5 && horaAtual < 12) {
    saudacoes.innerHTML = 'Bom dia'
} else if (horaAtual > 12 && horaAtual < 18) {
    saudacoes.innerHTML = 'Boa tarde'
} else {
    saudacoes.innerHTML = 'Boa noite'
}

// Esconder CPF

let tamanhoEscondidoCpf = ((50 * cpfContent.length) / 100).toFixed()
let parteVisivelCpf = cpfContent.slice(0, -tamanhoEscondidoCpf);
let parteInvisivelCpf = '*'.repeat(tamanhoEscondidoCpf);


if (cpfContent.length == 14) {
    parteInvisivelCpf = parteInvisivelCpf.replace('*******', '.***-**')
} else {
    parteInvisivelCpf = parteInvisivelCpf.replace('*********', '*/****-**')
}

let cpfEscondido = parteVisivelCpf + parteInvisivelCpf;
cpf.value = cpfEscondido;

// Editar informações

let inputs = document.querySelectorAll('.input');

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

let senhaIcon = document.getElementById('verSenha');
let inputSenha = document.getElementById('senha')

senhaIcon.addEventListener('click', () => {
    if (inputSenha.type == 'password') {
        inputSenha.type = 'text'
        senhaIcon.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        inputSenha.type = 'password'
        senhaIcon.classList.replace('fa-eye-slash', 'fa-eye')
    }
})