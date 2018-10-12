const read = require("./zad6modul.js");

read(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    return console.error('There was an error:', err);
  }
  list.forEach((item) => {
    console.log(item);
  });
});
