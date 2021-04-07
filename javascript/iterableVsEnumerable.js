//
let log = console.log;
// 1. give example of for-in over enumerable properties
// 2. give example of for-of over an iterable
// 3. give an example of object property value that is not iterable
// 4. give an example of object property that is not enumerable

const flowers = ['phlox', 'sedum', 'marigold'];
flowers.purple = 'aster';

// for-in iterates over properties that are enumerable
// object properties are enumerable by default
for (i in flowers) log(i); // 0 1 2 purple

// for-of iterates over values of an iterable
// arrays, strings, sets, are iterable, they have a built in iterator
// objects do not have an iterator
for (flower of flowers) log(flower); // phlox sedum marigold

// you can set property's enumerable to false
Object.defineProperty(flowers, 'red', { value: 'salvia', enumerable: false });
for (i in flowers) log(i); // 0 1 2 purple
