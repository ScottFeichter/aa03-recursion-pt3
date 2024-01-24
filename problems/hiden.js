function flatten(arr) {
  if (arr.length === 0) return arr;
  let level = [arr.shift()];
  return level.concat(flatten(arr));
}
