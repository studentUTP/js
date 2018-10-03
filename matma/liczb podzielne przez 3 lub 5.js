// numery poniżej 10
// liczby 3 5
// dla poniżej 10 są to 3 5 6 9 suma wynosi 23
let suma = 0;
for (let i = 0; i < 1000; i += 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    suma += i;
  }
}
console.log(suma);
