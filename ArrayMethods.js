const arr = ["zero", "one", "two", "three"];

// remove "one" from list
console.log(arr);
const indexOfOne = arr.indexOf("one");
arr.splice(indexOfOne, 1);
console.log(arr);

// add "one" to list after "two"
const indexOfTwo = arr.indexOf("two");
arr.splice(indexOfTwo + 1, 0, "one");
console.log(arr);
