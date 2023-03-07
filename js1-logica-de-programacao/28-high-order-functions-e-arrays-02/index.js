const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Sort OBS: Modifica o array
personagens.sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagens);

personagens.sort(function (a, b) {
  return b.nivel - a.nivel;
});

console.log(personagens);

const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagensOrdenados);
