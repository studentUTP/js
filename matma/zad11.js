const fs = require("fs");

let lista = [];
const pol = [];
let licznik = 0;
let licznik2 = 0;
let max = 0;

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < data.length; i += 1) {
      lista[licznik] = data[i];
      licznik += 1;
    }
    lista = lista.filter(str => /\S/.test(str));
    for (let j = 0; j < lista.length; j += 2) {
      if (licznik2 > 0) {
        pol[licznik2] = Number(lista[j] * 10) + Number(lista[j + 1]);
        licznik2 += 1;
      } else {
        pol[licznik2] = Number(lista[j] * 10) + Number(lista[j + 1]);
        licznik2 += 1;
      }
    }
    console.log(pol);
    for (let k = 0; k < pol.length; k += 1) {
      const makspoziom = pol[k] * pol[k + 1] * pol[k + 2] * pol[k + 3];
      const makspion = pol[k] * pol[k + 20] * pol[k + 40] * pol[k + 60];
      const maksskosp = pol[k] * pol[k + 21] * pol[k + 42] * pol[k + 63];
      const maksskosl = pol[k] * pol[k + 19] * pol[k + 38] * pol[k + 57];
      if (makspoziom > max) {
        max = makspoziom;
        console.log(max);
        console.log(`poziom ${pol[k]}`, pol[k + 1], pol[k + 2], pol[k + 3]);
      }
      if (makspion > max) {
        max = makspion;
        console.log(max);
        console.log(`pion ${pol[k]}`, pol[k + 20], pol[k + 40], pol[k + 60]);
      }
      if (maksskosp > max) {
        max = maksskosp;
        console.log(max);
        console.log(`skosp ${pol[k]}`, pol[k + 21], pol[k + 42], pol[k + 63]);
      }
      if (maksskosl > max) {
        max = maksskosl;
        console.log(max);
        console.log(`skosl ${pol[k]}`, pol[k + 21], pol[k + 42], pol[k + 63]);
      }
    }
  }
});
