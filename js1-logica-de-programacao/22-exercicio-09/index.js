function areaTriangulo(b, h) {
  return areaRetangulo(b, h) / 2;
}

function areaRetangulo(b, h) {
  return b * h;
}

function areaQuadrado(l) {
  return areaRetangulo(l, l);
}

function areaTrapezio(B, b, h) {
  return ((B + b) * h) / 2;
}

function areaCirculo(r) {
  return 3.14 * r ** 2;
}

let opcao = "";
do {
  opcao = prompt(
    `CALCULADORA GEOMÉTRICA
    Selecione uma das seguintes opções:\n
    [ 1 ] → Área do triângulo
    [ 2 ] → Área do retângulo
    [ 3 ] → Área do quadrado
    [ 4 ] → Área do trapézio
    [ 5 ] → Área do círculo
    [ 6 ] → SAIR`
  );

  switch (opcao) {
    case "1":
      const baseT = Number(prompt("Selecione a base do triângulo"));
      const alturaT = Number(prompt("Selecione a altura do triângulo"));
      const areaT = areaTriangulo(baseT, alturaT);
      alert(
        `A Área de um triângulo de base ${baseT} e altura ${alturaT} é igual a ${areaT}`
      );
      break;
    case "2":
      const baseR = Number(prompt("Selecione a base do retângulo"));
      const alturaR = Number(prompt("Selecione a altura do retângulo"));
      const areaR = areaRetangulo(baseR, alturaR);
      alert(
        `A Área de um retângulo de base ${baseR} e altura ${alturaR} é igual a ${areaR}`
      );
      break;
    case "3":
      const ladoQ = Number(prompt("Selecione o lado do quadrado"));
      const areaQ = areaQuadrado(ladoQ);
      alert(`A Área de um quadrado de lado ${ladoQ} é igual a ${areaQ}`);
      break;
    case "4":
      const baseMaior = Number(prompt("Selecione a base maior do trapézio"));
      const baseMenor = Number(prompt("Selecione a base menor do trapézio"));
      const alturaTrap = Number(prompt("Selecione a altura do trapézio"));
      const areaTrap = areaTrapezio(baseMaior, baseMenor, alturaTrap);
      alert(
        `A Área de um trapézio de base maior ${baseMaior}, base menor ${baseMenor} e altura ${alturaTrap} é igual a ${areaTrap}`
      );
      break;
    case "5":
      const raio = Number(prompt("Selecione o raio do círculo"));
      const areaC = areaCirculo(raio);
      alert(`A Área de um círculo de raio ${raio} é igual a ${areaC}`);
      break;
    case "6":
      alert("Saindo do programa...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "6");
