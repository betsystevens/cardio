'use strict';
// Given a string and a set of characters, return the shortest substring
// containing all the characters in the set.

// For example, given the string "figehaeci" and the
// set of characters {a, e, i}, you should return "aeci".

// If there is no substring containing all the characters
// in the set, return null.

// s = figehaeci
// set = {a, e, i}

// assumptions
// 1) the order of the characters from the set does not matter in the the substring
// 2) the letters from the set may occur multiple times
//    eg.)  figeehaaita returns  ehaai

const isInSet = (char, set) => {
  let found = set.filter((c) => c === char);
  return found.length === 1;
};

const initializeCounts = (set) => {
  let setCounters = {};
  set.forEach((char) => {
    setCounters[char] = 0;
  });
  return setCounters;
};

const isSatisfied = (counters) => {
  for (const a in counters) {
    if (counters[a] === 0) return false;
  }
  return true;
};

let string = 'lalllellalllelalel';
let set = ['a', 'e'];
let counters = initializeCounts(set);

// allle
// ella
// allle -> skip
// ela   -> winner
// ale

let minimumSubString = '';

let left = 0;
let right = left + set.length;
let subString = string.slice(left, right);

string
  .split('')
  .slice(left, right)
  .forEach((char) => {
    if (isInSet(char, set)) counters[char] = counters[char] + 1;
  });

while (left < string.length - set.length && right < string.length) {
  subString = string.slice(left, right);
  // does substring satisfy?
  if (isSatisfied(counters)) {
    if (
      subString.length < minimumSubString.length ||
      minimumSubString.length === 0
    ) {
      // if shorter than minimum, replace
      minimumSubString = subString;
      console.log(`New minimum: ${minimumSubString}`);
    }
    // yes, move left by one and loop
    let leftChar = string[left];
    if (isInSet(leftChar, set)) counters[leftChar] = counters[leftChar] - 1;
    left += 1;
  } else {
    // no, move right by one, loop
    let rightChar = string[right];
    if (isInSet(rightChar, set)) counters[rightChar] = counters[rightChar] + 1;
    right += 1;
  }
}

console.log(minimumSubString);
