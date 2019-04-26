var arr1 = [4, 8, 9, 10];
var arr2 = [4, 8, 9, 10];

const arraysEqual = (array1, array2) => {
  if (
    array1.length === array2.length &&
    array1.every(function(element, index) {
      return element === array2[index];
    })
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(`array1: ${arr1} array1 length: ${arr1.length}`);
console.log(`array2: ${arr2} array2 length: ${arr2.length}`);
console.log(arraysEqual(arr1, arr2));
