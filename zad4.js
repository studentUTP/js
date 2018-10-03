const fs = require("fs");

for (let i = 2; i < process.argv.length; i += 1) {
  fs.readFile(process.argv[i], "utf8", (err, dane) => {
    if (err) {
      console.log(err);
    } else {
      const wynik = dane.split("\n").length - 1;

      console.log(wynik);
    }
  });
}
