// Pede ao usuário para inserir um número.
let numero = prompt("Digite um número:");

// Converte a entrada do prompt para um número.
numero = parseFloat(numero);

// Verifica se o número é positivo, negativo ou zero e imprime a mensagem correspondente no console.
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
