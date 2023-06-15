
/*-----PRIMEIRA TELA -----*/

// Aguarda o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function() {
// Obtém o formulário pelo ID
const form = document.getElementById("simulator-form");

// Adiciona um evento de envio ao formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const mensalidade = parseFloat(document.getElementById("mensalidade").value);
    const tempo = parseInt(document.getElementById("tempo").value);
    const juros = parseFloat(document.getElementById("juros").value) / 100;

    // Calcula o resultado da simulação
    const resultado = calcularJurosCompostos(mensalidade, juros, tempo);

    // Exibe os resultados na segunda tela
    exibirResultados(nome, mensalidade, tempo, resultado);
});
});
  
// Função para calcular os juros compostos
function calcularJurosCompostos(mensalidade, taxa, tempo) {
    const meses = tempo * 12;
    const expressao = mensalidade * (((1 + taxa) ** meses - 1) / taxa);
    return expressao.toFixed(2); // Arredonda para 2 casas decimais
}


/*-----SEGUNDA TELA -----*/

// Função para exibir os resultados na segunda tela
function exibirResultados(nome, mensalidade, tempo, resultado) {
    const resultsText = document.getElementById("results-text");
    resultsText.innerHTML = `Olá ${nome}, investindo R$${mensalidade.toFixed(
        2
    )} todo mês, você terá R$${resultado} em ${tempo} anos sob uma taxa de juros de ${(
        taxa * 100
    ).toFixed(2)}% ao mês.`;

    // Exibe a segunda tela (resultado)
    const resultsSection = document.getElementById("results-section");
    resultsSection.style.display = "block";
}

