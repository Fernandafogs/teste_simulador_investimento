
/*
document.addEventListener("DOMContentLoaded", function() {
    // Função para fazer o POST na API
    function fazerRequest(data) {
      return fetch('http://api.mathjs.org/v4/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => result.result);
    }
  
    // Obtém os elementos do DOM
    const form = document.getElementById("simulatorForm");
    const resultadoContainer = document.getElementById("resultadoContainer");
  
    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
        // Obtém os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const mensalidadeInput = document.getElementById("mensalidade").value.replace(",", ".");
        const mensalidade = parseFloat(mensalidadeInput);
        const tempo = parseInt(document.getElementById("tempo").value);
        const jurosInput = document.getElementById("juros").value.replace(",", ".");
        const juros = parseFloat(jurosInput) / 100;

        // Verifica se o valor da mensalidade é um número válido
        if (isNaN(mensalidade)) {
        alert('Por favor, insira um valor válido para a mensalidade.');
        return;
        }
  
      // Cria a expressão para calcular os juros compostos
      const expressao = `${mensalidade} * (((1 + ${juros}) ^ (${tempo} * 12) - 1) / ${juros})`;
  
      // Faz o POST na API
      fazerRequest({ expr: expressao })
        .then(resultado => {
          // Exibe os resultados na segunda tela
          exibirResultados(nome, mensalidade, tempo, juros, resultado);
  
          // Oculta a primeira tela e exibe a segunda tela
          form.classList.add('hidden');
          resultadoContainer.classList.remove('hidden');
        })
        .catch(error => {
          console.error(error);
          alert('Ocorreu um erro na simulação. Por favor, tente novamente.');
        });
    });
  
    // Adiciona um evento de clique ao botão SIMULAR NOVAMENTE
    const submitAgainButton = document.getElementById("submitAgain");
    submitAgainButton.addEventListener("click", function(event) {
      // Limpa os campos do formulário
      form.reset();
  
      // Oculta a segunda tela e exibe a primeira tela
      resultadoContainer.classList.add('hidden');
      form.classList.remove('hidden');
    });
  
    // Função para exibir os resultados na segunda tela
    function exibirResultados(nome, mensalidade, tempo, juros, resultado) {
      const resultsText = document.getElementById("resultsText");
      resultsText.innerHTML = `Olá ${nome}, investindo R$${formatarValor(mensalidade)} todo mês, você terá R$${formatarValor(resultado)} em ${tempo} anos sob uma taxa de juros de ${(juros * 100).toFixed(2)}% ao mês.`;
    }
  
    // Função para formatar o valor monetário
    function formatarValor(valor) {
    const numeroFormatado = parseFloat(valor).toFixed(2);
    const partes = numeroFormatado.split('.');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partes.join(',');
  }
  
  });
  
  */

  document.addEventListener("DOMContentLoaded", function() {
    // Função para fazer o POST na API
    function fazerRequest(data) {
      return fetch('http://api.mathjs.org/v4/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => result.result);
    }
  
    // Obtém os elementos do DOM
    const form = document.getElementById("simulatorForm");
    const resultadoContainer = document.getElementById("resultadoContainer");
  
    // Oculta a segunda tela inicialmente
    resultadoContainer.classList.add('hidden');
  
    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Obtém os valores dos campos do formulário
      const nome = document.getElementById("nome").value;
      const mensalidadeInput = document.getElementById("mensalidade").value.replace(",", ".");
      const mensalidade = parseFloat(mensalidadeInput);
      const tempo = parseInt(document.getElementById("tempo").value);
      const jurosInput = document.getElementById("juros").value.replace(",", ".");
      const juros = parseFloat(jurosInput) / 100;
  
      // Verifica se o valor da mensalidade é um número válido
      if (isNaN(mensalidade)) {
        alert('Por favor, insira um valor válido para a mensalidade.');
        return;
      }
  
      // Cria a expressão para calcular os juros compostos
      const expressao = `${mensalidade} * (((1 + ${juros}) ^ (${tempo} * 12) - 1) / ${juros})`;
  
      // Faz o POST na API
      fazerRequest({ expr: expressao })
        .then(resultado => {
          // Exibe os resultados na segunda tela
          exibirResultados(nome, mensalidade, tempo, juros, resultado);
  
          // Oculta a primeira tela e exibe a segunda tela
          form.classList.add('hidden');
          resultadoContainer.classList.remove('hidden');
        })
        .catch(error => {
          console.error(error);
          alert('Ocorreu um erro na simulação. Por favor, tente novamente.');
        });
    });
  
    // Adiciona um evento de clique ao botão SIMULAR NOVAMENTE
    const submitAgainButton = document.getElementById("submitAgain");
    submitAgainButton.addEventListener("click", function(event) {
      // Limpa os campos do formulário
      form.reset();
  
      // Oculta a segunda tela e exibe a primeira tela
      resultadoContainer.classList.add('hidden');
      form.classList.remove('hidden');
    });
  
    // Função para exibir os resultados na segunda tela
    function exibirResultados(nome, mensalidade, tempo, juros, resultado) {
        const jurosFormatado = formatarValor(juros * 100);
        const resultsText = document.getElementById("resultsText");
        resultsText.innerHTML = `Olá ${nome}, investindo R$${formatarValor(mensalidade)} todo mês, você terá R$${formatarValor(resultado)} em ${tempo} anos sob uma taxa de juros de ${jurosFormatado.replace('.', ',')}% ao mês.`;
  }
  
  
    // Função para formatar o valor monetário
    function formatarValor(valor) {
      const numeroFormatado = parseFloat(valor).toFixed(2);
      const partes = numeroFormatado.split('.');
      partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return partes.join(',');
    }
  });
  