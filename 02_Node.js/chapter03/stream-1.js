const fs = require('fs');

const rs = fs.createReadStream('./readMe.txt');

rs.on('data', (chunk) => {
  console.log('new chunk received:');
  console.log(chunk);
});

rs.on('end', () => {
  console.log('finished reading data');
});

rs.on('error', (err) => {
  console.log(`Error reading the file: ${err}`);
});
