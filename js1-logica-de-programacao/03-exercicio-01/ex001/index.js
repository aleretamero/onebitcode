// Cadastro de Recrutas

const primeiroNome = window.prompt("Qual é o seu primeiro nome:");
const sobrenome = window.prompt("Qual é o seu sobrenome:");
const campoDeEstudo = window.prompt("Qual o campo de estudo:");
const anoDeNascimento = window.prompt("Qual ano você nasceu?");

const anoAtual = new Date();
const idade = anoAtual.getFullYear() - Number(anoDeNascimento);

// \n quebra linha em uma string
window.alert(
  `${primeiroNome} ${sobrenome}
  \n estuda na área de ${campoDeEstudo}
  \n e possui ${idade} anos`
);
