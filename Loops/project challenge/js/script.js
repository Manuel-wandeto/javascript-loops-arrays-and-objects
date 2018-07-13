var randomNumber = getRandomNumber(10);
var guess;
var correctguess = false;
function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

for (var i = 0; i < 10; i += 1) {
   guess = prompt("Im thinking of a number between 1 and 10, what number am i thinking of?");
   if (parseInt(guess) === randomNumber) {
	   correctguess = true;
	   break;
   }
}

if (i === 10 && correctguess !== true) {
	alert("sorry you only get 10 tries, my guess was "+randomNumber+" thanks for trying though!!");
	document.write("<h1>FAILED!!!");
}
if (correctguess) {
document.write("<h1> Yeeeeiy you got it, i guessed "+randomNumber+"");
document.write("<h2>You took "+i+" tries to get it right");
}








