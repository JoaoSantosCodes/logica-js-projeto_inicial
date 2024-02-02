// Exibe um alerta com a mensagem de boas-vindas ao jogo do número secreto.
alert('Boas-vindas ao jogo do número secreto');

// Declara uma variável chamada numeroSecreto e atribui a ela o valor 5.
let numeroSecreto = 2;

// Exibe o número secreto no console para fins de depuração.
console.log(numeroSecreto);

// Usa o prompt para solicitar ao usuário que escolha um número entre 1 e 10 e armazena o valor na variável chute.
let chute = prompt('Escolha um número entre 1 e 10');

// Condição: verifica se o valor armazenado em chute é igual ao valor armazenado em numeroSecreto.
if (numeroSecreto == chute) {
    // Se a condição for verdadeira, exibe um alerta informando que o usuário descobriu o número secreto.

    alert(`sso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    // Se a condição for falsa, exibe um alerta informando que houve um erro.
    if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);
    }else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
