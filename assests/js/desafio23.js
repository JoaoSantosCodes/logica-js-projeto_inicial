// Gera um número aleatório entre 0 (inclusive) e 1 (exclusive).
let numeroAleatorio = Math.random();

// Multiplica o número aleatório pelo intervalo desejado (1000) e arredonda para baixo.
// Adiciona 1 para garantir que o número esteja no intervalo [1, 1000].
let numeroInteiro = Math.floor(numeroAleatorio * 1000) + 1;

// Exibe o número inteiro no console.
console.log(numeroInteiro);
