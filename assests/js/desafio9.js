// Pede ao usuário para inserir um número e armazena o valor na variável 'numero'.
let numero = prompt('Digite um número para a contagem regressiva:');

// Converte o valor do número para um inteiro.
numero = parseInt(numero);

// Verifica se o valor inserido é um número válido.
if (!isNaN(numero)) {
    // Inicializa o contador com o número fornecido pelo usuário.
    let contador = numero;

    // Inicia um loop while que continuará enquanto o contador for maior ou igual a 0.
    while (contador >= 0) {
        // Exibe o valor atual do contador no console do navegador.
        console.log(contador);

        // Decrementa o contador para a próxima iteração.
        contador--;
    }
} else {
    // Se o valor inserido não for um número válido, exibe uma mensagem de erro.
    console.log('Por favor, insira um número válido.');
}
