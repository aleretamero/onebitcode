const arr = [
  "frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// Adicionar Elementos
// push → Adiciona no final → OBS: Pode colocar uma varivel no push que receba o tamanho do array.
arr.push("Boromir");
//unshift → Adiciona no começo → OBS: Pode colocar uma varivel no unshift que receba o tamanho do array.
arr.unshift("Boromir");
console.log(arr);

// Remover Elementos
// pop → Remove o último → OBS: Pode colocar uma varivel no pop que receba o elemento removido do array.
arr.pop();
// shift → Remove o Primeiro → OBS: Pode colocar uma varivel no pop que receba o elemento removido do array.
arr.shift();
console.log(arr);

// Pesquisar por um Elemento
//includes → Pesquisa um elemento e devolve verdadeiro ou falso.
const inclui = arr.includes("Gandalf");
console.log(inclui);
//indexOf → Pesquisa um elemento e devolve o ídice do elemento.
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// slice → Corta um array e pode armazenar numa variável a parte cortada
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);
// concat → Concatena os arrays, inclusive pode adicionar valores.
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos Elementos
// splice → Retira um elemento ou grupo de elementos e adiciona noveos elementos no lugar, pode armazenar os elementos retirados em uma variável como um novo array.
const elementoRemovido = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementoRemovido);

// Iterar sobre os Elementos
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(`${elemento} se encontra na posição ${i}`);
}
