// Método é uma função dentro de um objeto

let pessoa = {
  nome: "Alexandre",
  idade: 30,
  dizerOla() {
    console.log(`Olá, mundo! Meu nome é ${this.nome}`);
  },
};

console.log(pessoa);
pessoa.dizerOla();
