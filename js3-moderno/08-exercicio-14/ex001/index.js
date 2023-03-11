const avarage = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(avarage(2, 6, 3, 7, 4));
