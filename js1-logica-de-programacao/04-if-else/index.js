const idade = prompt("Informe a sua idade:");

if (idade > 18) {
  alert("Você é maior de idade");
} else if (idade > 12) {
  alert("Você é menor de idade");
} else if (idade > 4) {
  alert("Você é criaça");
} else {
  alert("..");
}

// Operador ternário
// const resultado = consição ? resultado_verdadeiro : resutado_falso