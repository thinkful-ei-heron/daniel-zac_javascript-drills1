'use strict'

function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  if (typeof age !== 'number') {
    throw new Error('Age must be a number');
  }
  if (typeof name !== 'string') {
    throw new Error('Name must be a string');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Zac', 30);
  console.log(greeting1);
} catch(e) {
  console.error(e);
}


