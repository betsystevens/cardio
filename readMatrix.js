// read comma separated numbers from stdin
// convert to matrix of numbers
// usage: node readMatrix.js someDataFile
// or
// input comma separated numbers from command line
// usage: node readMatrix.js
// ctrl-d to end input

// process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputData = '';
process.stdin.on('data', (chunk) => {
  inputData += chunk;
});
process.stdin.on('end', function() {
  // filter out empty last line
  const lines = inputData.split('\n').filter((line) => line.length > 0);
  var matrix = lines.map((line) => {
    return line.split(',').map((string) => parseInt(string, 10));
  });
  console.log(matrix);
});
