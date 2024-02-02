// Solicita ao usuário para inserir sua idade.
let idade = prompt("Digite sua idade:");

// Converte a entrada do prompt para um número inteiro.
idade = parseInt(idade);

// Verifica se a pessoa é maior ou menor de idade e exibe a mensagem apropriada no console.
if (idade >= 18) {
    console.log("Você é maior de idade. Pode realizar atividades restritas a maiores de 18 anos.");
} else {
    console.log("Você é menor de idade. Algumas atividades podem ter restrições.");
}
