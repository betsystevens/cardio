'use strict';

// write function to slice a string the same way the built-in does it
// s = myString('some awesome string')
// s.slice(1,4); -> 'ome'
//
// s = myString('abcdefg')
// s.slice(2,3)   -> 'c'
// s.slice(0,4)   -> 'abcd'
// s.slice(4,12)  -> 'efg'
// s.slice(3)     -> 'defg'
// s.slice(-2)    -> 'fg'
// s.slice(-10)   -> 'abcdefg'
//

const myString = (s) => {
  return {
    s,
    slice(start, end = s.length) {
      let result = '';
      end = end > s.length ? s.length : end;
      start = start < 0 ? (s.length + start < 0 ? 0 : s.length + start) : start;
      // start = start < 0 ? s.length + start : start;
      // start = start < 0 ? 0 : start;
      for (let i = start; i < end; i++) {
        result = result.concat(s[i]);
      }
      console.log(result);
      return result;
    },
  };
};

let s = myString('abcdefg');
s.slice(0, 2);
console.log('');
s.slice(4, 12);
console.log('');
s.slice(3, 6);
console.log('');
s.slice(1);
console.log('');
s.slice(6);
console.log('');
s.slice(-1);
console.log('');
s.slice(-3);
console.log('');
s.slice(-9);
