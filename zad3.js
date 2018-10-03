const fs = require("fs");

let a;
let napis;
let ab;
for (let i = 2; i < process.argv.length; i += 1) {
  a = process.argv[i];
  napis = fs.readFileSync(a);
  ab = napis.toString().split("\n").length - 1;
}
console.log(ab);
