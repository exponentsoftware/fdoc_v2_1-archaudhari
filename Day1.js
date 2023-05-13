//Day1
//1.a
function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}
//1.b
function filterByLength(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= num) {
      result.push(arr[i]);
    }
  }
  return result;
}
