// Pergunta ao usuário para digitar um número e armazena o valor na variável 'numero'.
let numero = prompt('Digite um número:');

// Converte a entrada do usuário para um número usando parseFloat.
numero = parseFloat(numero);

// Verifica se o número é positivo, negativo ou zero e mostra um alerta correspondente.
if (numero > 0) {
    alert('O número é positivo.');
} else if (numero < 0) {
    alert('O número é negativo.');
} else {
    alert('O número é zero.');
}