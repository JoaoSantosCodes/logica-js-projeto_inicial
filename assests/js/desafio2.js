// Pergunta ao usuário qual é o dia da semana e armazena a resposta na variável 'diaSemana'.
let diaSemana = prompt('Qual é o dia da semana?');

// Converte a entrada do usuário para minúsculas para tornar a comparação de texto insensível a maiúsculas e minúsculas.
diaSemana = diaSemana.toLowerCase();

// Verifica se a resposta é "sábado" ou "domingo" e exibe a mensagem apropriada.
if (diaSemana === 'sábado' || diaSemana === 'domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}