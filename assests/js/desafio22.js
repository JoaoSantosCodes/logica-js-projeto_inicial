// Gera um número aleatório entre 0 (inclusive) e 1 (exclusive).
let numeroAleatorio = Math.random();

// Multiplica o número aleatório pelo intervalo desejado (10) e arredonda para baixo.
// Adiciona 1 para garantir que o número esteja no intervalo [1, 10].
let numeroInteiro = Math.floor(numeroAleatorio * 10) + 1;

// Exibe o número inteiro no console.
console.log(numeroInteiro);
