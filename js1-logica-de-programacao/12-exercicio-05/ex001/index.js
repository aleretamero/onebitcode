let opcao;

do {
  opcao = prompt(
    `Selecione a opção desejada:
    \n[1]
    \n[2]
    \n[3]
    \n[4]
    \n[5] Encerrar`
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Você escolheu encerrar...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao != 5);
