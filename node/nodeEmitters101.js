// 1.   Describe Node

// Much of Node.js core API is built around asynchronous event-driven architecture.
// Certain kinds of objects emit named events that cause functions to be called
//                     ^           ^   ^                     ^
//                  *emitters*    *'data'*              *listeners*
//                                                      *handlers*
//
// event emitters have an 'on' method
// eventEmitter.on();
// process.stdin is an instance of the Event Emitter class
// process.stdin.on('data', doSomething);
// it's first argument is a named event, eg.  'data', 'end',
// it's second argument is a function to handle event
// the on method attaches a handler to the named event

// 2.   Give an example of a Node EventEmitter
//  process.stdin is an instance Stream
//  all streams are instances of EventEmitter
/*
var inputData = '';
process.stdin.on('data', function(chunk) {
  inputData += chunk;
});
process.stdin.on('end', () => {
  console.log(inputData.trim());
});
*/

// 3.   Give another example of a Node EventEmitter

// reminder: ^c interrupt, ^d eof or eot
// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}
process.on('SIGINT', handle);
process.on('SIGTERM', handle);
