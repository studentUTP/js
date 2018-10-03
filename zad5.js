const fs = require("fs");

const path = require("path");

const proces = process.argv[2];
fs.readdir(proces, (err, dane) => {
  if (err) {
    console.log(err);
  } else {
    for (let i = 0; i < dane.length; i += 1) {
      if (path.extname(dane[i]) === `.${process.argv[3]}`) {
        console.log(dane[i]);
      }
    }
  }
});
