// EXAMPLE 1 - Sort the Keys in a Map using JavaScript

// ✅ When Keys are STRINGS
const map1 = new Map([
  ['z', 'three'],
  ['a', 'one'],
  ['b', 'two'],
]);

// 👇️ {'z' => 'three', 'a' => 'one', 'b' => 'two'}
console.log(map1);

// ✅ Sort Ascending (low to high)
const sortedAsc = new Map([...map1].sort());

// 👇️ {'a' => 'one', 'b' => 'two', 'z' => 'three'}
console.log(sortedAsc);

// ----------------------------------------------------

// ✅ Sort Descending (high to low)
const sortedDesc = new Map([...map1].sort().reverse());

// 👇️ {'z' => 'three', 'b' => 'two', 'a' => 'one'}
console.log(sortedDesc);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort the Keys in a Map with String keys

// const map1 = new Map([
//   ['z', 'three'],
//   ['a', 'one'],
//   ['b', 'two'],
// ]);

// // 👇️ [['a', 'one'], ['b', 'two'], ['z', 'three']]
// console.log([...map1].sort());

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sort the Keys in a Map with String keys in descending order

// // ✅ When Keys are STRINGS
// const map1 = new Map([
//   ['z', 'three'],
//   ['a', 'one'],
//   ['b', 'two'],
// ]);

// // ✅ Sort Descending (high to low)
// const sortedDesc = new Map([...map1].sort().reverse());

// console.log(sortedDesc); // 👉️ {'z' => 'three', 'b' => 'two', 'a' => 'one'}

// ------------------------------------------------------------------

// // EXAMPLE 4 - Sort the Keys in a Map with Numeric keys

// const map2 = new Map([
//   [3, 'three'],
//   [1, 'one'],
//   [2, 'two'],
// ]);

// // ✅ Sort Ascending (low to high)
// const sortNumAsc = new Map(
//   [...map2].sort((a, b) => a[0] - b[0]),
// );

// // 👇️ {1 => 'one', 2 => 'two', 3 => 'three'}
// console.log(sortNumAsc);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Sort a Map by value in JavaScript

// // ✅ When VALUES are NUMBERS
// const map2 = new Map([
//   ['three', 3],
//   ['one', 1],
//   ['two', 2],
// ]);

// // ✅ Sort by Value Ascending (low to high)
// const sortNumAsc = new Map(
//   [...map2].sort((a, b) => a[1] - b[1]),
// );

// // 👇️ {'one' => 1, 'two' => 2, 'three' => 3}
// console.log(sortNumAsc);

// // ----------------------------------------------------

// // ✅ Sort by Value Descending (high to low)
// const sortedNumDesc = new Map(
//   [...map2].sort((a, b) => b[1] - a[1]),
// );

// // 👇️ {'three' => 3, 'two' => 2, 'one' => 1}
// console.log(sortedNumDesc);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Sort a Map with string values by Value

// // ✅ When VALUES are STRINGS
// const map1 = new Map([
//   ['three', 'c'],
//   ['one', 'a'],
//   ['two', 'b'],
// ]);

// // ✅ Sort  by Value Ascending (low to high)
// const sortedAsc = new Map(
//   [...map1].sort((a, b) => (a[1] > b[1] ? 1 : -1)),
// );

// // 👇️ {'one' => 'a', 'two' => 'b', 'three' => 'c'}
// console.log(sortedAsc);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Sort a Map with string values by Value in descending order

// // ✅ When VALUES are STRINGS
// const map1 = new Map([
//   ['three', 'c'],
//   ['one', 'a'],
//   ['two', 'b'],
// ]);

// // ✅ Sort by Value Descending (high to low)
// const sortedDesc = new Map(
//   [...map1].sort((a, b) => (a[1] > b[1] ? -1 : 1)),
// );

// // 👇️ {'three' => 'c', 'two' => 'b', 'one' => 'a'}
// console.log(sortedDesc);
