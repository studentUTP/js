let a = 0;
let b = 0;
for (let i = 1; i < 101; i += 1) {
  a += i ** 2;
  b += i;
}
console.log((b ** 2) - a);
