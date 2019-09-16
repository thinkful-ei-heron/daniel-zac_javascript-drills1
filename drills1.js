'use strict'

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born on ${yearOfBirth}`;
}

const greeting1 = createGreeting('Zac', 30);
console.log(greeting1);

