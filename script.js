//------------------------------
// Elementos DOM
//------------------------------
const nomeInput = document.getElementById("nome");
const btnVerificar = document.getElementById("verificar");
const divResultado = document.getElementById("resultado");

//-----------------------------
// Funções e Tratamento de dados
//-----------------------------

// Bloqueia números e caracteres especiais em tempo real

function apenasLetras(event){
    event.target.value = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

function verificarNome(){
    if(nomeInput.value === ""){
        alert("Digite seu nome!");
        nomeInput.focus();
        return false;
    }
    if(/[^a-zA-ZÀ-ÿ\s]/.test(nomeInput.value)){
        alert("O nome aceita apenas letras!");
        nomeInput.value = "";
        nomeInput.focus();
        return false;
    }

    return true;
}

// Resultado no html

function exibirNome(){
    divResultado.innerHTML = `
    o seu nome: ${nomeInput.value} <br>
    tem um total de ${nomeInput.value.length} Caracteres. 
    `
}

// Ações

btnVerificar.addEventListener("click", () => {
    if(verficarNome()){
        exibirNome();
    }
});

function handleEnter(event){
    if(event.key === "Enter"){
        btnVerificar.click();
    }
}
nomeInput.addEventListener("keydown", handleEnter);
nomeInput.addEventListener("input", apenasLetras);


