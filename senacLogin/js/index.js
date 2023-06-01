var containerInputs = document.querySelector(".container-inputs");

var span = containerInputs.querySelectorAll("span")[1];

function EsconderSpans(){
    var span = containerInputs.querySelector("span");
    span.style.display = "none";
}

function MostrarSpans(){
    var span = containerInputs.querySelector("span");
    span.style.display = "flex";
}

function MostrarOuEsconderSenha(){
    var inputSenha = document.getElementById("password");
    
    if(inputSenha.type == "password"){
        inputSenha.type = "text";
    }else{
        inputSenha.type = "password";
    }
}

window.addEventListener("load", () =>{
    
    var inputs = document.querySelectorAll("input");
    inputs[0].addEventListener("mouseover", EsconderSpans);
    inputs[0].addEventListener("mouseout", MostrarSpans );

    span.addEventListener("click", MostrarOuEsconderSenha);
});