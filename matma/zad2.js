let a = 0;
let a1 = 1;
let a2 = 2;
let sum = 2;
for (a; a < 4000000;) {
  a = a1 + a2;
  a1 = a2;
  a2 = a;
  if (a % 2 === 0) {
    sum += a;
  }
  console.log(a);
}
console.log(sum);
