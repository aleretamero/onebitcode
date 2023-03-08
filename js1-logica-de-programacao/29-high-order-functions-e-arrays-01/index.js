const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Sem usar Map:
/*
const nomes = [];

for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome);
}
console.log(nomes);
*/
// Com Map:
const nomes = personagens.map(function (personagens) {
  return personagens.nome;
});
console.log(nomes);

// Sem usar filter:
/*
const orcs = [];
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i]);
  }
}
console.log(orcs);
*/
// Com Map:
const orcs = personagens.filter(function (personagens) {
  return personagens.raca === "Orc";
});
console.log(orcs);

// Com reduce:
const nivelTotal = personagens.reduce(function (valorAcumuldao, personagens) {
  return valorAcumuldao + personagens.nivel;
}, 0);
console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumuldao, personagem) {
  if (valorAcumuldao[personagem.raca]) {
    valorAcumuldao[personagem.raca].push(personagem);
  } else {
    valorAcumuldao[personagem.raca] = [personagem];
  }
  return valorAcumuldao;
}, {});
console.log(racas);
