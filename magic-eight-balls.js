// declare the user name
let userName = 'Ketty';

userName ? console.log(`Hello, ${userName}`):console.log('Hello!');

// declare the user's questions
let userQuestion = 'Can I win lottery this week?';

console.log(`${userName} wants to know- ${userQuestion}`);

// create a random number
let randomNumber = Math.floor(Math.random()*8);
// print the random number
console.log(randomNumber);

// create a variable for magic eight ball
let eightBall = '';

// create the control flow
switch (randomNumber) {
  case 0:
    eightBall = 'My sources say no';
    break;
  case 1:
    eightBall = 'Outlook not so good';
    break;
  case 2:
    eightBall = 'Do not count on it';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'It is decidely so';
    break;
  case 6:
    eightBall = 'It is certain';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

//print magic eight ball's answer
console.log(`The Magic 8 Ball says- ${eightBall}.`)

