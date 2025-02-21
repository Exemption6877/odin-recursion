function fibs(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1 || n == 2) {
    return [0, 1];
  }

  let array = [0, 1];

  for (let i = 2; i < n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array;
}

// console.log(fibs(8));

function fibsRec(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1 || n == 2) {
    return [0, 1];
  }
  let array = fibsRec(n - 1);
  array.push(array[array.length - 2] + array[array.length - 1]);
  return array;
}

console.log(fibsRec(8));
