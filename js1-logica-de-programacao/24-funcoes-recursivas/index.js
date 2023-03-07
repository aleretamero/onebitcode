// Funçao Recursiva é uma função que chama ela mesma

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

dividir(256);

// Primeira → Segunda → Terceira → Quarta → ...

function dobrar(num) {
  console.log(num);
  dobrar(num * 2);
}

//dobrar(1) // → chamadas infinitas

function fatorial(num) {
  console.log(`Número: ${num}`);
  if (num === 0 || num === 1) {
    return 1;
  } else {
    console.log(`${num} * !${num - 1}`);
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(9));
