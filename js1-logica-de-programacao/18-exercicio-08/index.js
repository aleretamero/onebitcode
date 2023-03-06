const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    `---Cadastro de imóveis---
    ${imoveis.length} → imóveis cadastrados.
    
     Selecione uma opção:
    [ 1 ] >>> Salvar novo imóvel.
    [ 2 ] >>> Mostrar imóveis salvos.
    [ 3 ] >>> Sair do programa.`
  );

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Qual nome do proprietário?");
      imovel.quartos = prompt("Possui quantos quartos?");
      imovel.banheiros = prompt("Possui quantos banheiros?");
      imovel.garagem = prompt("Possui Garagem? (Sim/Não)");

      const confirmacao = confirm(
        `Salvar este imóvel?
        Proprietário: ${imovel.proprietario}
        Quartos: ${imovel.quartos}
        Banheiros: ${imovel.banheiros}
        Possui garagem? ${imovel.garagem}`
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel Salvo com sucesso!")
      } else {
        alert("Voltando ao menu principal!")
      }
      break;
    case "2":
      if (imoveis.length === 0) {
        alert("Não há nenhum imóvel cadastrado!");
      } else {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            `Imóvel ${i + 1}
            Proprietário: ${imoveis[i].proprietario}
            Quartos: ${imoveis[i].quartos}
            Banheiros: ${imoveis[i].banheiros}
            Possui garagem? ${imoveis[i].banheiros}`
          );
        }
      }
      break;
    case "3":
      alert("Fechando o Programa...");
      break;
    default:
      alert("Opção Inválida!");
  }
} while (opcao !== "3");
