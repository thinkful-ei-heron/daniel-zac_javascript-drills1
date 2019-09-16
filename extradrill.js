'use strict';

function decode(string){
  let result = '';
  let arr = string.split(' ');
  let cypher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  for (let i = 0; i < arr.length; i++){
    let currentChar = arr[i][0];
    let currentIndex = cypher[`${currentChar}`];
    if(arr[i][currentIndex] !== undefined) {
      result += arr[i][currentIndex];
    }
    else {
      result += ' ';
    }
  }
  return result;
}
console.log(decode('craft block argon meter bells brown croon droop'));
