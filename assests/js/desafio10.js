// Pede ao usuário para inserir um número e armazena o valor na variável 'numero'.
let numero = prompt('Digite um número para a contagem progressiva:');

// Converte o valor do número para um inteiro.
numero = parseInt(numero);

// Verifica se o valor inserido é um número válido.
if (!isNaN(numero)) {
    // Inicializa o contador com 0, pois queremos contar a partir de 0.
    let contador = 0;

    // Inicia um loop while que continuará enquanto o contador for menor ou igual ao número fornecido pelo usuário.
    while (contador <= numero) {
        // Exibe o valor atual do contador no console do navegador.
        console.log(contador);

        // Incrementa o contador para a próxima iteração.
        contador++;
    }
} else {
    // Se o valor inserido não for um número válido, exibe uma mensagem de erro.
    console.log('Por favor, insira um número válido.');
}
