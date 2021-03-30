// given r and list of integers
// count the number of triplets
// where {i,j,k} are a geometric sequence
// of common ratio r
// example
// r = 3
// {1,3,9} and {3,9,27}
// r = 4
// {1,4,16} and {4,16,64}
//

/*
 *  1. create Map to hold each number 
        entries = new Map();

 *  2. traverse array

 *  3. for each unique element, n in array
        an entry will be made in entries
        entries.set(n, {count: 1, r: 0, r2: 0})
        count: number of occurrences of n
        r: count of r factors
        r2: count of r squared factors 

 *  3. count: number of occurrences of n in array
        count is increased by one on each occurrence 

 *  4. r: number of occurrences of n/r
        when n is first entered, and on every encounter,
        check for n/r in Map, 
          if entries.has(n/r) add current count of n/r to r
          let nEntry = entries.get(n)
          let rEntry = entries.get(n/r)
          nEntry[r] = nEntry[r] + rEntry[count]
          entries.set(n, nEntry)
 *  similarly for n/r*r
 *  5. r2: number of occurrences of n/r*r
          when n if first entered and every subsequent occurrence, 
          check for n/r*r in Map,
          if exists update r2 for n
 *  6. if r2 is increased, triplets count has increased
          from n/r entry, get r
          let rEntry = entries.get(n/r)
          sum = sum + rEntry(r)
  *   for n, if it's r2 increased, triplets were completed
  *   The number of triplets completed with ths increase in n
  *   is the number of valid pairs, valid {i, j} that have already
  *   occurred in the array. This is the value stored in 
  *   entries(n/r) r property.
 */

/* brute force algorithm */
const arr1 = [
  [1, 1, 1, 3, 9],
  [1, 1, 1, 3, 9, 9],
  [1, 1, 1, 3, 9, 9, 9],
  [1, 1, 1, 3, 9, 9, 9, 9],
];

const arr4 = [
  [1, 3, 1, 3, 9],
  [1, 3, 1, 3, 9, 3, 3, 9],
  [1, 3, 1, 3, 9, 3, 3, 9, 27],
  [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9],
  [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9, 27],
  [1, 3, 1, 3, 9, 3, 3, 9, 27, 1, 3, 9, 27, 81],
];
function findTriplets(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = i + 1; j <= arr.length - 2; j++) {
      for (let k = j + 1; k <= arr.length - 1; k++) {
        if (arr[k] === arr[j] * r && arr[j] == arr[i] * r) {
          sum += 1;
          console.log(`${arr[i]}, ${arr[j]}, ${arr[k]}`);
        }
      }
    }
  }
  return sum;
}
let r = 3;
arr4.forEach((a) => {
  let sum = 0;
  console.log(a);
  sum = findTriplets(a);
  console.log(`sum: ${sum}`);
});
