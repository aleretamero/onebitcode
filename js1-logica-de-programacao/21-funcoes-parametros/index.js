function dobro(n) {
  console.log(n * 2);
}
dobro(5);

function dizerOla(nome = "mundo") {
  console.log(`Olá, ${nome}!`);
}

dizerOla("Alexandre");
dizerOla();

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Alexandre", "alexandre@email.com", "1234");
novoUsuario("Alexandre", "alexandre@email.com", "1234");

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}
muitosParametros(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "Email",
  "senha"
);

function objetoComParametro(usuario) {
  usuario.nome;
  usuario.email;
}
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  endereco: "",
  aniversario: "",
  Email: "",
  senha: "",
};
objetoComParametro(dadosDoUsuario);
