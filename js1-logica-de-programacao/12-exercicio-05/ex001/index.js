let opcao;

do {
  opcao = prompt(
    `Selecione a opção desejada:\n
    [1]\n
    [2]\n
    [3]\n
    [4]\n
    [5] Encerrar`
  );
  alert(`Opção selecionada → ${opcao}`);
} while (opcao != 5);

alert("Finalizando operação");
