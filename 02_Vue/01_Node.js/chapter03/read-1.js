const fs = require('fs');

const data = fs.readFileSync('./example.txt');
console.log(data);

const data1 = fs.readFileSync('./example.txt', 'utf8');
console.log(data1);

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
