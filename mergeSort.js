function mergeSort(array) {
  if (array.length == 1 || array.length == 0) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  // I want to slice these halves as well
  let leftSort = mergeSort(left);
  let rightSort = mergeSort(right);

  function merge(leftSorting, rightSorting) {
    const sorted = [];

    // Due to while usage this loop run until given array becomes empty
    // and everything transfers to 'sorted' array
    while (leftSorting.length > 0 && rightSorting.length > 0) {
      if (leftSorting[0] < rightSorting[0]) {
        // shifting is essentially deleting the item from original array,
        //  thus making next item hold index 0.
        sorted.push(leftSorting.shift());
      } else {
        sorted.push(rightSorting.shift());
      }
    }

    // adding remaining items
    return sorted.concat(leftSorting).concat(rightSorting);
  }

  return merge(leftSort, rightSort);
}

console.log(mergeSort([8, 12, 4, 5, 7, 2, 3, 1, 9]));
