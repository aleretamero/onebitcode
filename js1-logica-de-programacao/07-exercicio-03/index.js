let valorMedida = prompt("Digite o valor em metros que deseja converter");

let opcaoConverter = prompt(
  `Selecione a opção que deseja converter,
  \n[mm]  → milímetro
  \n[cm]  → centímetro
  \n[dm]  → decímetro
  \n[dam] → decâmetro
  \n[hm]  → hectômetro
  \n[km]  → quilômetro`
);

let valorConvertido;

switch (opcaoConverter) {
  case "mm":
    valorConvertido = valorMedida * 1000;
    break;
  case "cm":
    valorConvertido = valorMedida * 100;
    break;
  case "dm":
    valorConvertido = valorMedida * 10;
    break;
  case "dam":
    valorConvertido = valorMedida / 10;
    break;
  case "hm":
    valorConvertido = valorMedida / 100;
    break;
  case "km":
    valorConvertido = valorMedida / 1000;
    break;
  default:
    alert("Opção inválida");
    break;
}

if (valorConvertido === "Opçaõ inválida") {
  alert("Erro na conversão");
} else {
  alert(
    `O valor ${valorMedida}m convertido em "${opcaoConverter}" é igual a ${valorConvertido}${opcaoConverter}`
  );
}
