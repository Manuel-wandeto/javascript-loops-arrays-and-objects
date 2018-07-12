function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// first random number is generated
var firstGuess = getRandomNumber(10000);
console.log(firstGuess);
var attempts = 0;

// computer should create another random number and then we match that to the first random number, the attempts counts how many times it has been matched.
var comp_answer;

while (comp_answer !== firstGuess) {
	comp_answer = getRandomNumber(10000);
	attempts += 1;
}
console.log(" the computer said "+comp_answer+"");
document.write("The guessed number was "+firstGuess+" the computer got it right after "+attempts+" attempts");