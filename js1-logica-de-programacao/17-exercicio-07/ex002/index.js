const pilhaDeCartas = [];
let opcao = "";

do {
  opcao = prompt(
    `Tem um total de "${pilhaDeCartas.length}" cartas no baralho.
   Selecione uma opção:
   \n[1] → Adicionar uma carta
   \n[2] → Puxar uma carta
   \n[3] → Sair`
  );

  switch (opcao) {
    case "1":
      let cartaInserida = pilhaDeCartas.push(
        prompt("Qual a carta a ser inserida?")
      );
      break;
    case "2":
      let cartaPuxada = pilhaDeCartas.pop();
      if (!cartaPuxada) {
        alert(`Não há nenhuma carta no baralho`);
      } else {
        alert(`A carta puxada foi ${cartaPuxada}`);
      }
      break;
    case "3":
      alert("Fechando o programa...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
