function randomNumber(lower, upper) {
  return Math.floor((Math.random()*(upper - lower)) + lower );
}
var user_name;
do {
	user_name = prompt("what is your name?");
} while (user_name === "");

var user_maximum = prompt("What is the largest number i should guess?");

  while (isNaN(user_maximum)) {
	user_maximum = prompt("That is not a number, please type a number");
  }
var maximum = parseInt(user_maximum);

var user_minimum = prompt("What is the lowest number i should guess?");

  while (isNaN(user_minimum)) {
	user_minimum = prompt("That is not a number, please type a number");
  }

var minimum = parseInt(user_minimum);
var user_input = prompt("okey i have guessed a number from "+minimum+" to "+maximum+" what have i guessed?" );
  while (isNaN(user_input)) {
	user_input = prompt("That is not a number, please type a number");
  }

var correct_answer = randomNumber(minimum, maximum);
console.log("correct answer: "+correct_answer+"");
console.log("user said: "+user_input+"");

while (parseInt(user_input) !== correct_answer) {
	user_input = prompt("Not really guess again");
}

alert("Yeeeiy you got it, i guessed "+correct_answer+"");

