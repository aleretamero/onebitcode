const listaDePacientes = [];
let filaDeEspera = "";
let opcao = "";
do {
  if (listaDePacientes.length === 0) {
    opcao = prompt(
      `Sem fila de espera
      Escolha uma das Opções:
      [1] Novo Paciente
      [3] Sair`
    );
  } else if (listaDePacientes.length > 0) {
    opcao = prompt(
      `Fila de Espera:\n${filaDeEspera}\n
      Escolha uma das Opções:
      [1] Novo Paciente
      [2] Consultar Paciente
      [3] Sair`
    );
  }

  let novoPaciente = "";
  let consultarPaciente = "";
  switch (opcao) {
    case "1":
      novoPaciente = prompt("Qual nome do paciente que deseja adicionar?");
      listaDePacientes.push(novoPaciente);
      filaDeEspera = "";
      for (let i = 0; i < listaDePacientes.length; i++) {
        filaDeEspera += `${i + 1}º Paciente → ${listaDePacientes[i]}\n`;
      }
      break;
    case "2":
      consultarPaciente = listaDePacientes.shift();
      alert(`Consultando o Paciente : ${consultarPaciente}`);
      filaDeEspera = "";
      for (let i = 0; i < listaDePacientes.length; i++) {
        filaDeEspera += `${i + 1}º Paciente → ${listaDePacientes[i]}\n`;
      }
      break;
    case "3":
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");

alert("Fechando o programa...");
