const fs = require("fs");

let dane;
fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    dane = data.toString();
    let najw = 0;
    let zm = 0;
    for (let i = 1; i < dane.length - 13; i += 1) {
      zm = Number(dane[i]);
      for (let j = 1; j < 13; j += 1) {
        zm *= Number(dane[i + j]);
        if (zm > najw) {
          najw = zm;
        }
      }
    }
    console.log(najw);
  }
});
