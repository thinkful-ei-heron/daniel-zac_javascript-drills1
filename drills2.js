'use strict'

// eslint-disable-next-line strict
function jediName(firstName, lastName) {
    return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}
const myJedi = jediName('Zacharia', 'Lutz');
//console.log(myJedi);

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  }
  else if (num > 0) {
    console.log('To infinity');
  }
  else if (num < 0) {
    console.log('To negative inifity');
  }
  else {
    console.log('Staying home');
  }
}

function decode(word) {
  let result = '';
  let arr = word.split(' ');
  let code = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  
  for (let i = 0; i < arr.length; i++) {
    arr[i][0]
    result += ''
  }
}

const message = decode('craft block argon meter bells brown croon droop');
console.log(message);
