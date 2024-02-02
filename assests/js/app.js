// Exibe um alerta com a mensagem de boas-vindas ao jogo do número secreto.
alert('Boas-vindas ao jogo do número secreto');

// Declara uma variável chamada numeroSecreto e atribui a ela o valor 5.
let numeroSecreto = 2;

// Exibe o número secreto no console para fins de depuração.
console.log(numeroSecreto);

// Usa o prompt para solicitar ao usuário que escolha um número entre 1 e 10 e armazena o valor na variável chute.
let chute;
let tentativas = 1; // Inicializa a contagem de tentativas.

// Enquanto o chute não for igual ao número secreto, continua pedindo ao usuário que faça um chute.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    // Converte o valor do chute para um número inteiro.
    chute = parseInt(chute);

    // Verifica se o valor armazenado em chute é igual ao valor armazenado em numeroSecreto.
    if (numeroSecreto == chute) {
        // Se a condição for verdadeira, exibe um alerta informando que o usuário descobriu o número secreto e o número de tentativas.
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        // Se a condição for falsa, exibe um alerta informando se o número secreto é maior ou menor.
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Incrementa o número de tentativas.
        tentativas++;
    }
}
