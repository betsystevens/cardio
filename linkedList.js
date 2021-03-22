// Use native http or https module to send network request if needed.
// usage: node linkedList.js < ll.data
process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputData = '';
process.stdin.on('data', function(chunk) {
  inputData += chunk;
});
process.stdin.on('end', function() {
  // Do not edit: Output the solution to the console.
  const output = writeOutput(inputData);
  console.log(output);
});

// Filtered is using the nodejs v8 engine to process JavaScript. Please write your code inside the function block below.
// Our grading criteria is based on stream output, please return your output to log your final result.

let head = null;
let size = 0;

const newNode = (number) => {
  let node = {
    value: number,
    next: null,
  };
  return node;
};
function remove(place = 0) {
  if (head === null) return;
  if (place === 0) {
    console.log(`remove ${head.value} from ${place}`);
    head = head.next;
    size -= 1;
  } else {
    place = place >= size ? size - 1 : place;
    let prev = head;
    let current = head;
    for (let i = 0; i < place; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    size -= 1;
  }
}
function insert(item, place = 0) {
  let number = parseInt(item, 10);
  let node = newNode(number);
  if (head === null) {
    // empty list
    head = node;
  } else {
    if (place === 0) {
      // insert at head
      node.next = head;
      head = node;
    } else {
      place = place > size ? size : place;
      // insert in middle
      let current = head;
      let prev = head;
      for (let i = 0; i < place && current !== null; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
  }
  size += 1;
}

function printList() {
  if (head === null) console.log('empty');
  else {
    let current = head;
    let string = '';
    while (current != null) {
      string = string.concat(current.value, ' ');
      current = current.next;
    }
    string = string.concat(`size: ${size}`);
    console.log(string);
  }
}

function writeOutput(inputData) {
  // Start writing code here to consume input, and return result.

  const lines = inputData.split('\n');
  let done = false;
  let i = 0;
  while (!done) {
    let line = lines[i++].split(' ');
    let command = line[0];

    switch (command) {
      case 'q':
        done = true;
        break;
      case 'f':
        // console.log(`insert ${line[1]}`)
        let value = parseInt(line[1], 10);
        insert(line[1]);
        printList();
        break;
      case 'i':
        // console.log(`insert ${line[1]} at ${line[2]}`)
        insert(line[1], line[2]);
        printList();
        break;
      case 'r':
        // console.log(`delete first element`);
        remove();
        printList();
        break;
      case 'd':
        // console.log(`delete node at ${line[1]}`);
        remove(line[1]);
        printList();
        break;
      default:
        // console.log(line);
        break;
    }
  }
  console.log('\n');
  // return 'done';
  return inputData;
}
