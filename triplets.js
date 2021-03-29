const arr = [
  [1, 3, 9, 3],
  [1, 3, 9, 3, 9],
  [1, 3, 9, 3, 9, 27],
  [1, 3, 9, 3, 9, 27, 3],
  [1, 3, 9, 3, 9, 27, 3, 9],
  [1, 3, 9, 3, 9, 27, 3, 9, 27],
];

const arr2 = [
  [1, 1, 1, 3, 9],
  [1, 1, 1, 3, 9, 9],
  [1, 1, 1, 3, 9, 9, 9],
  [1, 1, 1, 3, 9, 9, 9, 9],
];
const arr3 = [[1, 3, 9, 3, 9], [1, 3, 9, 3, 3, 9]];

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
