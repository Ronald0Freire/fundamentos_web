//-------------------nome----------------------
let nome = document.querySelector('#nome')
let validateNome = document.querySelector('#erroNome')

//-------------------email---------------------
let email = document.querySelector('#email')
let validateEmail = document.querySelector('#erroEmail')

//-------------------assunto-------------------
let assunto = document.querySelector('#assunto')
let validateAssunto = document.querySelector('#erroAssunto')

//-------------------mapa----------------------
let mapa = document.querySelector('#mapa')

//variáveis auxialiares de validação
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome(){
    if (nome.value.length < 3){
        erroNome.innerHTML = 'Nome Inválido';
        nomeOk = false;
    } else {
        erroNome.innerHTML = '';
        nomeOk = true;
    }
}


function validaEmail(){
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email inválido'
        emailOk = false;
    } else {
        erroEmail.innerHTML = ''
        emailOk= true;
    }
}

function validaAssunto(){
    if (assunto.value.length > 100){
        erroAssunto.innerHTML = 'Número de caracteres excedidos(Máx. 100 caracteres)';
        assuntoOk = false
    } else {
        erroAssunto.innerHTML = '';
        assuntoOk = true
    }
}

function valida(){
    if (assuntoOk && emailOk && nomeOk){
        alert ('Enviado com sucesso')
    } else {
        alert ('Preencha corretamente')
    }
}