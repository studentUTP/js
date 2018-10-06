const lista = [];
const max = 2000000;
let sum = 0;
for (let i = 0; i < max; i += 1) {
  lista[i] = i;
}

for (let j = 2; j < Math.sqrt(max); j += 1) {
    if (lista[j] !== 0) {
        for (let k = j * 2; k < max; k += j) {
            lista[k] = 0;
          }
    }
  
}

for (let c = 2; c < max; c += 1) {
  if (lista[c] !== 0) {
    sum += lista[c];
    //console.log(lista[c]);
    //console.log(sum);
  }
}
console.log(lista);
console.log(sum);

// poprawny 142913828922
//          142913828939