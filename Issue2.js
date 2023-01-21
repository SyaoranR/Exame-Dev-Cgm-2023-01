/* Q.2 - Escreva um código que tenha como retorno a sequência de fibonacci a partir de um valor determinado pelo usuário e exiba esse valor em HTML. */

// Selecting screen elements
const valor = document.querySelector('#valor');
const answer = document.querySelector('#answer');
const alerta = document.querySelector('#alerta');
const botao = document.querySelector('#vetor');
const coluna = document.querySelector('#coluna');

valor.onblur = () => {
    if (valor.value == '') {
        coluna.style = "color: #b33700";
        valor.style = "border-color: #b33700";
    } else {
        coluna.style = "color: #00aa44";
        valor.style = "border-color: #00aa44";
    }
}

botao.onclick = () => {
    if (valor.value == ''){
        valor.focus();
    } else if (valor.value < 0) {
        valor.value = '';      
        alerta.innerText = "Somente valor maior ou igual a 0";        
    } else {
        alerta.innerText = '';
        document.getElementById("paragraf3").innerText = 'vetor Fibonacci = ' + vectorFib(valor.value);        
    }
}

const vectorFib = (vl) => {
    vl = Number.parseInt(vl);
    
    let fibVetor = [];
    fibVetor[0] = 1;
    fibVetor[1] = 1;

    for (i = 2; i <= vl; i++) {
        fibVetor[i] = fibVetor[i-1] + fibVetor[i-2];
    }
    return fibVetor;
}
