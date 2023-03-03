const nomePersonagemAtq = prompt("Qual o nome do personagem que vai atacar?");
const poderDeAtaque = Number(prompt(`Qual o poder de ataque do ${nomePersonagemAtq}?`));

const nomePersonagemDef = prompt("Qual o nome do personagem que vai defender?");
const vidaPersonagemDef = Number(prompt(`Qual a vida do ${nomePersonagemDef}?`));
const defesaPesornagemDef = Number(prompt(`Qual a defesa do ${nomePersonagemDef}`));
const escudoPersoangemDef = confirm(`O ${nomePersonagemDef} possui escudo? \nsim [ok] \nnão [cancelar]`);

// Calcula o dano
let danoCausado = 0;

if (poderDeAtaque <= defesaPesornagemDef) {
  danoCausado = 0;
} else if (poderDeAtaque > defesaPesornagemDef && escudoPersoangemDef == true) {
  danoCausado = (poderDeAtaque - defesaPesornagemDef) / 2;
} else if (poderDeAtaque > defesaPesornagemDef) {
  danoCausado = poderDeAtaque - defesaPesornagemDef;
}

let resultadoDanoCausado;
if (danoCausado > 0) {
  resultadoDanoCausado = danoCausado;
} else if (danoCausado === 0) {
  resultadoDanoCausado = "Não teve dano causado";
}

alert(
  `Nome do personagem que que atacou → ${nomePersonagemAtq}
  \nPoder de ataque do ${nomePersonagemAtq} → ${poderDeAtaque}
  \n\nNome do personagem que defendeu → ${nomePersonagemDef}
  \nA vida inicial do ${nomePersonagemDef} → ${vidaPersonagemDef}
  \nA defesa do ${nomePersonagemDef} → ${defesaPesornagemDef}
  \nO ${nomePersonagemDef} possuia escudo? ${
    escudoPersoangemDef ? "sim" : "não"
  }
  \n\nQual o dano causado → ${resultadoDanoCausado}
  \nA vida atual do ${nomePersonagemDef} → ${vidaPersonagemDef - danoCausado}`
);
