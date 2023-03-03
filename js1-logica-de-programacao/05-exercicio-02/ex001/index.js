const carOne = prompt("Insira o nome do primeiro veículo");
const velOne = prompt(`Qual a velocidade do ${carOne}?`);
const carTwo = prompt("Insira o nome do segundo veículo");
const velTwo = prompt(`Qual a velocidade do ${carTwo}?`);

if (Number(velOne) > Number(velTwo)) {
  alert(`O ${carOne} estava mais rápido.`);
} else if (Number(velOne) < Number(velTwo)) {
  alert(`O ${carTwo} estava mais rápido.`);
} else if (Number(velOne) === Number(velTwo)) {
  alert(`Os carros ${carOne} e ${carTwo} estavam na mesma velocidade.`);
} else {
  console.error("ERRO");
}
