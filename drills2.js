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
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'a') {
      result += arr[i][1];
    }
    else if (arr[i][0] === 'b') {
      result += arr[i][2];
    }
    else if (arr[i][0] === 'c') {
      result += arr[i][3];
    }
    else if (arr[i][0] === 'd') {
      result += arr[i][4];
    }
    else result += ' ';
  }

  return result;
}

const message = decode('craft block argon meter bells brown croon droop');
//console.log(message);


function daysInMonth(month, leapYear = 0) {
  switch(month){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      return '31 days';
      break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      return '30 days'
      break;
    case 'february':
      if (leapYear) {
        return '29 days';
      }
      else {
        return '28 days';
      }
  }
}
// console.log(daysInMonth('june', 1))
// console.log(daysInMonth('february', 0))
// console.log(daysInMonth('february'))

function rps(choice) {
  if (choice !== 1 && choice !== 2 && choice !== 3) {
  throw new Error('Choice must be 1, 2, or 3!');
  }

  const compChoice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    if (compChoice === 1) return 'It\'s a tie! Both chose rock.';
    else if (compChoice === 2) return 'You lose! Paper beats rock.';
    else return 'You win! Rock beats scissors.';
  }
  else if (choice === 2) {
    if (compChoice === 1) return 'You win! Paper beats rock.';
    else if (compChoice === 2) return 'It\'s a tie! Both chose paper.';
    else return 'You lose! Scissors beats paper.';
  }
  else {
    if (compChoice === 1) return 'You lose! Rock beats scissors.';
    else if (compChoice === 2) return 'You win! Scissors beats paper.';
    else return 'It\'s a tie! Both chose scissors.';
  }
}

console.log(rps(2));