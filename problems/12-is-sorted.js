/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {


// this conditional checks if the first element of the arr is less than the second and if its not it returns false
  if(arr[0] > arr[1]){
    return false
  }

  // this conditional checks if there is only 1 element in the arr and if there is it returns true
  if(arr.length === 1){
    return true
  }

  // this conditional checks if first ele is less than the second and if it is it removes it and calls the function 
  if(arr[0] <= arr[1]) {
    arr.shift()
    // console.log(arr)
    return isSorted(arr)
  }


}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
