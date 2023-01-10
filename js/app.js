'use strict'; // gives us stricter syntax rules.

let person = prompt('What is your name?');
console.log(person);

let question1 = 'How old am I?';
let question1Answer = '33';
let question2 = 'What is my favorite animal';
let question2Answer = 'Cow';

if (person === null) {
  alert('Please Refresh and start again!');
} else {

  // here is where we ask our questions
  let isReady = confirm('Are you ready to play a game?');

  if (isReady) {
    alert('Great!' + person + 'is ready');

    let answer1 = prompt(question1);
    // use console logs to debug!
    console.log(answer1, question1Answer);
    console.log(typeof answer1, typeof question1Answer);

    if (answer1 === question1Answer) {
      alert('Thats right!');
    } else {
      alert('Wring, try again');
    }

  } else {
    alert('ugh oh, please come back when you are ready');
  }

}
