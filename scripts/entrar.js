let verSenha = document.getElementById('verSenha');
let inputs = document.querySelectorAll('input');
let visivel = false;

verSenha.addEventListener('click', () => {
    if (visivel == false) {
        inputs[1].type = 'text';
        verSenha.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        inputs[1].type = 'password';
        verSenha.classList.replace('fa-eye-slash', 'fa-eye');
    }

    visivel = !visivel;
})