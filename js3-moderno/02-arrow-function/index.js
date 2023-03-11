function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`);

const nonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma anônima: ${nonymousSum(2, 2)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

const subtract = (a, b) => a - b;

console.log(`Subtração arrow function: ${subtract(2, 2)}`);

const double = n => `O dobro de ${n} é ${n * 2}`;

console.log(double(5));

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)