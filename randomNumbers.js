'use strict';

function rand0toN(n) {
  return Math.floor((n + 1) * Math.random()); // return random number (0,n)
}
function rand1toN(n) {
  return Math.floor(n * Math.random() + 1); // return random (1,n)
}
// create object to store frequency of number returned from random function
// { 0:0, 1:0, 1:0, ... ,n:0}
const frequencyObj = (n) => {
  const obj = {};
  for (let i = 0; i <= n; i++) {
    obj[i] = 0;
  }
  console.log(obj);
  return obj;
};
// upper limit of random numbers
const MAX = 10;

const frequency = frequencyObj(MAX);

// generate a bunch of random numbers
for (let i = 0; i < 100000; i++) {
  // let n = rand0toN(MAX);
  let n = rand1toN(MAX);
  frequency[n] += 1;
}
console.log(frequency);
