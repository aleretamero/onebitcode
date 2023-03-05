let palavra = prompt(
  `Análisador de Palídromos\n
  Escreva uma palavra para ser feito sua análise:`
);

palavraInversa = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInversa += palavra[i];
}

if (palavra === palavraInversa) {
  alert("Temos um Palídromo");
} else {
  alert(
    `Não temos um Palídromo.
    \npalavra digitada → ${palavra}
    \npalavra inversa  → ${palavraInversa}`
  );
}
