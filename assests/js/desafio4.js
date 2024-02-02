// Pergunta ao usuário para digitar a pontuação e armazena o valor na variável 'pontuacao'.
let pontuacao = prompt('Digite a pontuação do jogo:');

// Converte a entrada do usuário para um número usando parseInt.
pontuacao = parseInt(pontuacao);

// Verifica se a pontuação é maior ou igual a 100 e mostra um alerta correspondente.
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}
