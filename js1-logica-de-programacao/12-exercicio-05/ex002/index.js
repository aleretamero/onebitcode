let quantidadeDinheiro = Number(
  prompt("Qual a quantidade de dinheiro disponível?")
);
let opcao;

do {
  opcao = prompt(`
  Valor disponível: R$${quantidadeDinheiro}
  \nEscolha uma opção:
  [1] → Adicionar dinheiro.
  [2] → Retirar dinheiro.
  [3] → Sair do programa. 
  `);

  let valor;
  if (opcao == 1 || opcao == 2) {
    if (opcao == 1) {
      valor = Number(prompt("Qual valor a ser adicionado:"));
      quantidadeDinheiro += valor;
    } else if (opcao == 2) {
      valor = Number(prompt("Qual valor a ser retirado:"));
      quantidadeDinheiro -= valor;
    }
  }
} while (opcao != 3);

alert(
  `Valor de dinheiro disponível: R$${quantidadeDinheiro}
  \nEncerrando o programa...`
);
