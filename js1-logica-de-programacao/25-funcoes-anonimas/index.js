// Funçao anônima não possui um nome, a mesma deve
// ser armazenada em uma variável

let operacao = function (a, b) {
  return a + b;
};

console.log(operacao(4, 5));

operacao = function (a, b) {
  return a - b;
};

console.log(operacao(4, 5));

olaMundo();
oiMundo();

function olaMundo() {
  console.log("Olá mundo!");
}

const oiMundo = function () {
  console.log("Oi, Mundo!");
};
