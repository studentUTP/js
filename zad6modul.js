const fs = require("fs");
const path = require("path");

module.exports = function bhp(first, second, third) {
  const lista = [];
  fs.readdir(first, (err, dane) => {
    if (err) {
      return third(err);
    }
    for (let i = 0; i < dane.length; i += 1) {
      if (path.extname(dane[i]) === `.${second}`) {
        lista.push(dane[i]);
      }
    }
    third(null, lista);
  });
};
