let saudacoes = document.getElementById('bom');
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let emailContent = email.textContent;
let cpf = document.getElementById('cpf');
let cpfContent = cpf.textContent;
let senha = document.getElementById('senha');
let senhaContent = senha.textContent;

// Saudações

if (horaAtual > 5 && horaAtual < 12) {
    saudacoes.innerHTML = 'Bom dia'
} else if (horaAtual > 12 && horaAtual < 18) {
    saudacoes.innerHTML = 'Boa tarde'
} else {
    saudacoes.innerHTML = 'Boa noite'
}

// Esconder informações

// Email

let cortarArroba = emailContent.split('@');
let emailNome = cortarArroba[0];
let emailDominio = cortarArroba[1];
let tamanhoEscondidoEmail = ((50 * emailNome.length) / 100).toFixed()
let parteVisivelEmail = emailNome.slice(tamanhoEscondidoEmail);
let parteInvisivelEmail = '*'.repeat(tamanhoEscondidoEmail);
let emailEscondido = parteInvisivelEmail + parteVisivelEmail + '@' + emailDominio
email.innerHTML = emailEscondido;

// CPF

let tamanhoEscondidoCpf = ((50 * cpfContent.length) / 100).toFixed()

let parteVisivelCpf = cpfContent.slice(0, -tamanhoEscondidoCpf);
let parteInvisivelCpf = '*'.repeat(tamanhoEscondidoCpf);
let cpfEscondido = parteVisivelCpf + parteInvisivelCpf;
cpf.innerHTML = cpfEscondido;

// Senha

let tamanhaEscondidoSenha = ((100 * senhaContent.length) / 100).toFixed()

let parteInvisivelSenha = '*'.repeat(tamanhaEscondidoSenha);
senha.innerHTML = parteInvisivelSenha;

// Alterar Informações