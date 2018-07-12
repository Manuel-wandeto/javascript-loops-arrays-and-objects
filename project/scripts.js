function randomNumber(lower, upper) {
  return Math.floor((Math.random()*(upper - lower)) + lower );
}

var user_maximum = prompt("What is the largest number i should guess?");
var maximum = parseInt(user_maximum);
var user_minimum = prompt("What is the lowest number i should guess?");
var minimum = parseInt(user_minimum);

var user_input = prompt("okey i have guessed a number from "+minimum+" to "+maximum+" what have i guessed?" );

var correct_answer = randomNumber(minimum, maximum);
console.log("correct answer: "+correct_answer+"");
console.log("user said: "+user_input+"");

while (parseInt(user_input) !== correct_answer) {
	user_input = prompt("Not really guess again");
}

alert("Yeeeiy you got it, i guessed "+correct_answer+"");