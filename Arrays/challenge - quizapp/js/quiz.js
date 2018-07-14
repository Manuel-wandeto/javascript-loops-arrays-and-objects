
function print(message) {
  document.write(message);
}
var questions = [
	["What is the name of the U.S president?", "DONALD TRUMP", "TRUMP"],
	["What programming language has an icon of a jem?", "RUBY" , "RUBY ON RAILS", "RAILS"],
	["which is the best programming language in the world", "NONE", "NONE IS BEST", "ALL ARE EQUALLY GOOD"]
	
];
var user_answer;
var correctcount = 0;
var correctAnswers = "<h2> You got these questions correct; </h2>";
correctAnswers += "<ol>";
var wrongAnswers = "<h2> You got these questions all wrong; </h2>";
wrongAnswers += "<ol>";
function algorithm(quiz) {
	for (var i = 0; i < quiz.length; i += 1) {
		user_answer = prompt(quiz[i][0]);
		user_answer = user_answer.toUpperCase();
		if (user_answer === quiz[i][1] || user_answer === quiz[i][2] || user_answer === quiz[i][3]){
			correctAnswers += "<li>" + quiz[i][0] + "</li>";
			correctcount += 1;
		} else {
			wrongAnswers += "<li>" + quiz[i][0] + "</li>";
		}
		
	}
	wrongAnswers += "</ol>";
	correctAnswers += "</ol>";
	print("You have gotten "+correctcount+" out of 3 questions right");
	if (correctcount === 3) {
		print(correctAnswers);
	} else if (correctcount === 0) {
		print(wrongAnswers);
	} else {
		print(correctAnswers);
		print(wrongAnswers);
	}	
}
algorithm(questions);
console.log("Program finished successfully, challenge comleted!!!");
/*author: manuel wandeto, my simple quiz app to practise loops and arrays in javascript, feel free to add your own code, its open source!! */



