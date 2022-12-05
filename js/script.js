
//Email
let email = document.querySelector('#inputEmail')
let erroEmail = document.querySelector('#erroEmail')

//Senha
let senha = document.querySelector('#inputPassword')
let erroSenha = document.querySelector('#erroSenha')

//endereco
let endereco = document.querySelector('#inputEndereco')
let erroEndereco = document.querySelector('#erroEndereco')

//complemento
let complemento = document.querySelector('#inputComplemento')
let erroComplemento = document.querySelector('#erroComplemento')

//cidade
let cidade = document.querySelector('#inputCidade')
let erroCidade = document.querySelector('#erroCidade')

//estado
let estado = document.querySelector('#inputEstado')
let erroEstado = document.querySelector('#erroEstado')

//CEP
let cep = document.querySelector('#inputCep')
let erroCep = document.querySelector('#erroCep')



//Check
let emailOk = false 
let senhaOk = false
let enderecoOk = false
let complementoOk = false
let cidadeOk = false
let estadoOk = false
let cepOk = false



function validaEmail(){
    if (email.value.indexOf('@') == -1){
        erroEmail.innerHTML = '@ necessário, por favor conserte'
        emailOk = false
    } else if (email.value.indexOf('.') == -1){
        erroEmail.innerHTML = '. necessário, por favor conserte'
        emailOk = false
    } else {
        erroEmail.innerHTML = ' '
        emailOk = true;
    }
}

function validaSenha(){
    if (senha.value.length < 5){
        erroSenha.innerHTML = 'Atenção! Senha menor que 5 dígitos.'
        senhaOk = false;
    } else if (senha.value.indexOf('@')== -1){
        erroSenha.innerHTML = 'Caracteres especiais requeridas!'
        senhaOk = false;
    }
    else {
        erroSenha.innerHTML = ' '
        erroSenha = true
    }
}

function validaEndereco(){
    if (endereco.value.length > 40){
        erroEndereco.innerHTML = 'Atenção! Endereço muito grande. '
        enderecoOk = false
    } else {
        erroEndereco.innerHTML = ' '
        enderecoOk = true;
    }
}

function validaComplemento(){
    if (complemento.value.length > 40){
        erroComplemento.innerHTML = 'Atenção! Complemento muito grande. '
        complementoOk = false
    } else {
        erroComplemento.innerHTML = ' '
        erroComplemento = true;
    }
}

function validaCidade(){
    if (cidade.value.length > 15){
        erroCidade.innerHTML = 'Atenção! Cidade muito longaa'
        cidadeOk = false
    } else {
        erroCidade.innerHTML = ' '
        erroCidade = true;
    }
}

function validaEstado(){
    if (estado.value.length > 2){
        erroEstado.innerHTML = 'Atenção! Reveja suas crendeciais'
        estadoOk = false
    } else {
        erroEstado.innerHTML = ' '
        estadoOk = true;
    }
}

function validaCep(){
    if (cep.value.length > 9){
        erroCep.innerHTML = 'Atenção! Reveja suas crendencias'
        cepOk = false;
    } else {
        erroCep.innerHTML = ' '
        cepOk = true
    }
}



function valida(){
    if (emailOk && senhaOk && enderecoOk && complementoOk && cidadeOk && estadoOk && cepOk){
        alert ('Tudo Ok! Formulario enviado.')
    } else {
        alert ('Erro. Preencha corretamente.')
    }
}
