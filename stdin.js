// read from stdin
// usage: node stdin.js < someFileToReadFrom

process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputData = '';
process.stdin.on('data', function(chunk) {
  inputData += chunk;
});
process.stdin.on('end', function() {
  const output = writeOutput(inputData);
  console.log(output);
});

function writeOutput(inputData) {
  // Start writing code here to consume input, and return result.

  // do something amazing
  let inputArray = inputData.split('\n');
  // return something
  return inputArray[0];
}
