const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += `${indice}. ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`;
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para vaga:");
  const descricao = prompt("Informe uma descrição para vaga:");
  const dataLimite = prompt(
    "Informe uma data limite para vaga (dd/mm/aaaa) para a vaga:"
  );

  const consfirmacao = confirm(
    `Deseja criar uma nova vaga com essas informações:
    Nome: ${nome}
    Desdrição: ${descricao}
    Data limite: ${dataLimite}`
  );

  if (consfirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o ídice da vaga que deseja exibir:");

  if (indice >= vagas.length || indice < 0) {
    alert("Índice inválido");
    return;
  }

  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return `${textoFinal}\n - ${candidato}`;
  },
  "");

  alert(
    `Vaga nº ${indice}
    Nome: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data Limite: ${vaga.dataLimite}
    Quantidade de candidatos: ${vaga.candidatos.length}
    Candidatos inscritos: ${candidatosEmTexto}`
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o ídice da vaga para qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  const consfirmacao = confirm(
    `Deseja inscrever o candidato ${candidato} na vaga:
    Índice → ${indice}
    Nome → ${vaga.nome}
    Descrição → ${vaga.descricao}
    Data Limite → ${vaga.dataLimite}`
  );

  if (consfirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o ídice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const consfirmacao = confirm(
    `Tem certeza que deseja excluir a vaga:
    Índice → ${indice}
    Nome → ${vaga.nome}
    Descrição → ${vaga.descricao}
    Data Limite → ${vaga.dataLimite}`
  );

  if (consfirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída");
  }
}

function exibirMenu() {
  const opcao = prompt(
    `Sistema de Vagas de Emprego
    [ 1 ] → Listar vagas disponíveis
    [ 2 ] → Criar um nova vaga
    [ 3 ] → Visualizar uma vaga
    [ 4 ] → Inscrever um(a) candidato(a)
    [ 5 ] → Excluir uma vaga
    [ 6 ] → Sair`
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo do programa...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== "6");
}

executar();
