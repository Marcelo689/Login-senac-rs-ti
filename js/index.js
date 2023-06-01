const form = document.getElementsByTagName("form")[0];

var nome                 = document.getElementById("nome");
var divUsuarioErro       = document.getElementById("container-usuarioErro");
var checkUsuario     = document.getElementById("checkUsuario");
var spanUsuarioErro      = document.getElementById("usuarioErro");
divUsuarioErro.style.display = "none";
checkUsuario.style.display = "none";

var senha          = document.getElementById("senha");
var divSenhaErro   = document.getElementById("container-senhaErro");
var checkSenha     = document.getElementById("check-senha");
var spanSenhaErro  = document.getElementById("span-senha");

divSenhaErro.style.display = "none";
checkSenha.style.display = "none";

var email          = document.getElementById("email");
var checkEmail     = document.getElementById("check-email");
var divEmailErro   = document.getElementById("container-emailErro");
var spanEmail      = document.getElementById("span-email");

divEmailErro.style.display = "none";
checkEmail.style.display = "none";

var confirmarSenha        = document.getElementById("confirmarSenha");
var divConfirmarSenhaErro = document.getElementById("container-confirmarSenhaErro");
var checkConfirmarSenha   = document.getElementById("check-confirmar-senha");
var spanConfirmarSenha    = document.getElementById("span-confirmar-senha");
divConfirmarSenhaErro.style.display = "none";


form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    validarCampos();
})


function validarCampos(){
    var nomeV           = nome.value;

    var senhaV          = senha.value;
    var emailV          = email.value;
    var confirmarSenhaV = confirmarSenha.value;

    if(nomeV == ""){
        setarErro(nome,checkUsuario, divUsuarioErro , spanUsuarioErro,"nome deve ser preenchido!!");
    }else{
        campoValido(nome, checkUsuario, divUsuarioErro);
    }
    if(senhaV == ""){
        setarErro(senha,checkSenha, divSenhaErro , spanSenhaErro,"senha deve ser preenchido!!");
    }else{
        campoValido(senha, checkSenha, divSenhaErro);
    }
    if(emailV == ""){
        setarErro(email,checkEmail, divEmailErro , spanEmail,"email deve ser preenchido!!");
    }else{
        campoValido(email, checkEmail, divEmailErro);
    }
    if(confirmarSenhaV == ""){
        setarErro(confirmarSenha,checkConfirmarSenha, divConfirmarSenhaErro , spanConfirmarSenha,"As senha devem combinar!!");
    }else{
        if(confirmarSenhaV != senhaV){
            campoValido(confirmarSenha, checkConfirmarSenha, divConfirmarSenhaErro);
        }
    }

    if(isTodosValidos(0)){
        form.submit();
    }
}

function setarErro(campo, divCheck, divUsuarioErro, spanMensagemErro, mensagem){
    campo.focus();
    
    divCheck.style.display = "none";
    divUsuarioErro.style.display = "block";
    divUsuarioErro.style.color = "red";
    campo.style.border = "1px solid red";
    spanMensagemErro.innerHTML = mensagem;
}

function campoValido(campo, checkUsuario, divUsuarioErro){
    checkUsuario.style.display = "block";
    divUsuarioErro.style.display = "none";
    campo.style.border = "1px solid lightgreen";
}

function isTodosValidos(){
    var lista = document.querySelectorAll("form span")
    
     for(var i = 0; i < lista.length; i++){
        var span = lista[i];

        if(span.display != "block")
            return false;
    }

    return true;
}