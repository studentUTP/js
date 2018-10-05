
const max = 1000000;
const a = [0];
let b;
for (let i = 1; i <= max; i += 1) {
  a[i] = 1;
}

for (let j = 2; j <= Math.sqrt(max); j += 1) {
  if (a[j] === 1) {
    for (b = j * 2; b <= max; b += j) {
      a[b] = 0;
    }
  }
}
b = 0;
for (let v = 2; v <= max; v += 1) {
  if (a[v] === 1) {
    b += 1;
    if (b === 10001) {
      console.log(v); break;
    }
  }
}
