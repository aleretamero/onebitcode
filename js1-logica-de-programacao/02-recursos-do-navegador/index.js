let nome = "Alexandre";

console.log(nome);
console.error(nome);
console.warn(nome);

nome = window.prompt("Insira o seu nome: ");

let confirmacao = window.confirm("Confirma essa ação?");
console.log(nome);
console.log(confirmacao);
window.alert(nome);

// não é preciso colocar window
alert("Olá, mundo!");
