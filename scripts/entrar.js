let inputSenha = document.getElementById('senha');
let inputConfirmarSenha = document.getElementById('confirmarSenha');
let forms = document.getElementById('formsEntrada');
let confirmacao = document.getElementById('confirmação');
let btnAvancar = document.getElementById('proximo');
let inputs = forms.querySelectorAll('input');
let erroSenha = document.getElementById('erroSenha');
let erroCampos = document.getElementById('erroCampos');
let senhaChanges = 0;
let btnVoltar = document.getElementById('voltar2');
let verSenha1 = document.getElementById('verSenha1');
let verSenha2 = document.getElementById('verSenha2');
let verSenha3 = document.getElementById('verSenha3')
let ver1type = 'invisivel';
let ver2type = 'invisivel';
let ver3type = 'invisivel';

let nomeRev = document.getElementById('nomeRev');
let emailRev = document.getElementById('emailRev');
let senhaRev = document.getElementById('senhaRev');

// Confirmar senha

inputSenha.addEventListener('change', function(){
    if (inputSenha.value != "") {
        inputConfirmarSenha.removeAttribute('disabled');
        inputConfirmarSenha.removeAttribute('title')
    } else {
        inputConfirmarSenha.setAttribute('disabled', '');
        inputConfirmarSenha.setAttribute('title', 'Digite a senha primeiro');
    }
});

// Visualizar senha (SEGURAR)

// Primeiro botão
verSenha1.addEventListener('mousedown', function(){
    inputs[2].type = 'text';
    verSenha1.classList.replace('fa-eye', 'fa-eye-slash');
});

verSenha1.addEventListener('mouseup', function(){
    inputs[2].type = 'password';
    verSenha1.classList.replace('fa-eye-slash', 'fa-eye');
});

// Segundo botão
verSenha2.addEventListener('mousedown', function(){
    inputs[3].type = 'text';
    verSenha2.classList.replace('fa-eye', 'fa-eye-slash');
});

verSenha2.addEventListener('mouseup', function(){
    inputs[3].type = 'password';
    verSenha2.classList.replace('fa-eye-slash', 'fa-eye');
});

// Terceiro botão
verSenha3.addEventListener('mousedown', function(){
    document.getElementById('senhaRev').type = 'text';
    verSenha3.classList.replace('fa-eye', 'fa-eye-slash');
});

verSenha3.addEventListener('mouseup', function(){
    document.getElementById('senhaRev').type = 'password';
    verSenha3.classList.replace('fa-eye-slash', 'fa-eye');
});

// Avançar

inputs[2].addEventListener('change', function(){
    if (inputs[2].value == "") {
        inputs[3].value = "";
    }
});

inputs.forEach(input => {
    input.addEventListener('focus', function(){
        erroSenha.style.display = 'none';
        erroCampos.style.display = 'none';
    });
})

inputs[3].addEventListener('focusout', function(){
    if (inputs[3].value != inputs[2].value) {
        erroSenha.style.display = 'block';
    }
})

inputs[2].addEventListener('change', function(){
    if (senhaChanges > 0) {
        if (inputs[3].value != inputs[2].value) {
            erroSenha.style.display = 'block';
        }
    }

    senhaChanges++;
})

btnAvancar.addEventListener('click', function(){
    let liberado = true;
    erroSenha.style.display = 'none';
    erroCampos.style.display = 'none';

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            liberado = false;
            erroCampos.style.display = 'block';
            break;
        }
    }

    if (inputs[2].value != inputs[3].value) {
        liberado = false;
        erroSenha.style.display = 'block';
    }

    if (liberado == true) {
        forms.style.display = 'none'
        confirmacao.style.display = 'flex'

        // Confirmação
        nomeRev.value = inputs[0].value;
        emailRev.value = inputs[1].value;
        senhaRev.value = inputs[2].value;
    }
});

// Voltar

btnVoltar.addEventListener('click', function(){
    forms.style.display = 'flex'
    confirmacao.style.display = 'none'
});