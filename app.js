// Função para verificar se a string contém maiúsculas ou caracteres acentuados
function verificarString(texto) {
    const regexMaiusculas = /[A-Z]/;
    const regexAcentos = /[\u00C0-\u00FF]/;
    
    return regexMaiusculas.test(texto) || regexAcentos.test(texto);
}

// Função para verificar o input e exibir mensagem de erro
function verificarInput() {
    const input = document.getElementById("texto-input");
    const mensagemErro = document.getElementById("mensagem-erro");

    console.log("Verificando: ", input.value); 
    
    if (verificarString(input.value)) {
        mensagemErro.textContent = "Não pode conter caracteres maiúsculos ou acentuados.";
        input.value = ''; // Limpa o input se a verificação falhar
    } else {
        mensagemErro.textContent = ""; // Limpa a mensagem de erro se o texto for válido
    }
}

// Adiciona o evento 'input' para verificar sempre que o usuário digitar
document.getElementById("texto-input").addEventListener("input", verificarInput);

//Variáveis dos buttons
const btnCriptografar = document.querySelector(".conteudo__button__criptografar")
const btnDescriptografar = document.querySelector(".conteudo__button__descriptografar");
const btnCopiar = document.querySelector(".conteudo__button__copiar");

//Função para verificar qual dos botões foram clicados para executar o programa
function verificarClique(event){
    let isCriptografar = false;
    let isDescriptografar = false;
    let isCopiar = false;

    if(event.target === btnCriptografar){
        isCriptografar = true;
    }else if(event.target === btnDescriptografar){
        isDescriptografar = true;
    }else if(event.target === btnCopiar){
        isCopiar = true;
    }

    const textoInput = document.getElementById('texto-input').value;
    let textoResultado = "";

    if(isCriptografar){
        textoResultado = criptografar(textoInput);
        document.getElementById('texto-resultado').value = textoResultado;
    }else if(isDescriptografar){
        textoResultado = descriptografar(textoInput);
        document.getElementById('texto-resultado').value = textoResultado;
    }else if(isCopiar){
        document.getElementById('texto-resultado').select();
        document.execCommand('copy');
    }
}

//Eventos de clique, juntamente com a função verificarClique
btnCriptografar.addEventListener("click", verificarClique);
btnDescriptografar.addEventListener("click", verificarClique);
btnCopiar.addEventListener("click", verificarClique);

//Funções para criptografar e descriptografar:
function criptografar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Função para descriptografar o texto
function descriptografar(textoCriptografado) {
    return textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
