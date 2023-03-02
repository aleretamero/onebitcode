// Calculadora de 4 Operações

const primeiroNum = window.prompt("Digite o primeiro número");
const segundoNum = window.prompt("Digite o segundo número");

const soma = Number(primeiroNum) + Number(segundoNum);
const subtracao = Number(primeiroNum) - Number(segundoNum);
const multiplicacao = Number(primeiroNum) * Number(segundoNum);
const divisao = Number(primeiroNum) / Number(segundoNum);

window.alert(
  `A soma de ${primeiroNum} + ${segundoNum} é igual a ${soma}
  A subtração de ${primeiroNum} - ${segundoNum} é igual a ${subtracao}
  A multiplicação de ${primeiroNum} * ${segundoNum} é igual a ${multiplicacao}
  A divisão de ${primeiroNum} / ${segundoNum} é igual a ${divisao}`
);
