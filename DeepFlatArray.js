const array = [1, [2, 3, [4, 5], [6, 7]], 8, 9, [10, 11]];

// with stack
function deepFlatWithStack(array) {
  const stack = [...array];
  const result = [];

  while (stack.length) {
    const el = stack.pop();
    if (Array.isArray(el)) {
      stack.push(...el);
    } else {
      result.push(el);
    }
  }
  return result.reverse();
}

console.log(deepFlatWithStack(array));

// with recursion
function deepFlatWithRecursion(array) {
  return array.reduce((result, currentEl) => {
    if (Array.isArray(currentEl)) {
      result = result.concat(deepFlatWithRecursion(currentEl));
    } else {
      result.push(currentEl);
    }
    return result;
  }, []);
}

console.log(deepFlatWithRecursion(array));
