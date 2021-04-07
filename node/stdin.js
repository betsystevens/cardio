// read from stdin
// usage: node stdin.js < someFileToReadFrom
// 1. read file from stdin into a string
// 2. on end of file call a function, pass string as argument
//    main(data)    // data it file read
// 3. main does something amazing and returns a result

// process.stdin is a stream
// all streams are instances of EventEmitter class

process.stdin.setEncoding('UTF-8');
var inputData = '';
process.stdin.on('data', (data) => {
  inputData += data;
});
process.stdin.on('end', () => {
  console.log(inputData);
});
