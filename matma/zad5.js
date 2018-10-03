let j;
let x;
let nwynik = 0;
let result = 0;
for (let i = 600; i < 999; i += 1) {
  j = i;
  for (let z = 600; z < 999; z += 1) {
    x = z;
    nwynik = j * x;
    nwynik = nwynik.toString();
    const lewa = nwynik.toString().slice(0, Math.floor(nwynik.length / 2));
    const prawa = nwynik.toString().slice(Math.floor(nwynik.length / 2));
    if (lewa[0] === prawa[2] && lewa[1] === prawa[1] && lewa[2] === prawa[0]) {
      result = (result < nwynik) ? nwynik : result;
    }
  }
}
console.log(result);
