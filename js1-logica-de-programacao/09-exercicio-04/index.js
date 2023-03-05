const nomeTurista = prompt("Qual o seu nome:");
let visitouCidade = prompt("Você já visitou alguma cidade? [S/N]");

let nomeCidades = [];
let quantidadeCidade = 0;

while (visitouCidade === "S" || visitouCidade === "s") {
  quantidadeCidade += 1;
  nomeCidades.push(prompt("Qual o nome da cidade visitada?"));
  visitouCidade = prompt("Você visitou outra cidade? [S/N]");
}

if (quantidadeCidade === 0) {
  alert(
    `nome: ${nomeTurista}
    \nnão visitou nunhuma cidade.`
  );
} else if (quantidadeCidade === 1) {
  alert(
    `nome: ${nomeTurista}
    \nQuantidade de cidade visitada → ${quantidadeCidade}
    \nNome da cidade visitada:
    \n${nomeCidades}`
  );
} else {
  alert(
    `nome: ${nomeTurista}
    \nQuantidade de cidades visitadas → ${quantidadeCidade}
    \nNome das cidades visitadas:
    \n${nomeCidades}`
  );
}
