let a;
let b;
let c;
for (let i = 200; i < 1000; i += 1) {
  a = i;
  for (let j = 200; j < 1000; j += 1) {
    b = j;
    for (let h = 200; h < 1000; h += 1) {
      c = h;
      if (a + b + c === 1000) {
        if ((a ** 2) + (b ** 2) === (c ** 2)) {
          console.log(a * b * c);
        }
      }
    }
  }
}
