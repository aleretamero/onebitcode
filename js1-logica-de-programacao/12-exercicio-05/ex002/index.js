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
  switch (opcao) {
    case "1":
      valor = Number(prompt("Qual valor a ser adicionado:"));
      quantidadeDinheiro += valor;
      break;
    case "2":
      valor = Number(prompt("Qual valor a ser retirado:"));
      quantidadeDinheiro -= valor;
      break;
    case "3":
      alert(
        `Valor de dinheiro disponível: R$${quantidadeDinheiro}
        \nEncerrando o programa...`
      );
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
