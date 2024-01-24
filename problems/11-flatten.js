/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

let flatten = (arr) => {
  debugger;
  let unpacked = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      unpacked.push(...flatten(arr[i]));
    } else {
      unpacked.push(arr[i]);
    }
  }
  return unpacked;
};

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
// console.log(flatten([[[[]]]])); // []

console.log(
  flatten([
    [1, 2],
    [3, [4, 5]],
  ])
); //  [1, 2, 3, 4, 5]

// assert.deepEqual(flatten([[[1, 2]], [[3, 4]]]), [1, 2, 3, 4]);
// });

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
