const numeroTabuada = Number(prompt("Digite um número para obter sua tabuada"));
let resultadoTabuada = "";

for (let i = 1; i <= 20; i++) {
  resultadoTabuada += `${numeroTabuada} X ${i} = ${numeroTabuada * i}\n`;
}

alert(`Tabuada do número ${numeroTabuada}\n${resultadoTabuada}`);
