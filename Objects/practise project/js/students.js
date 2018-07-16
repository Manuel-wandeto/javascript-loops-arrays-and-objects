var students = [
	
	{
		name: "Jason",
		track: "front end development",
		achievements: 23,
		points: 2048
	},
	{
		name: "Stanley",
		track: "web design",
		achievements: 62,
		points: 3262
	},
	{
		name: "Asha",
		track: "ios",
		achievements: 23,
		points: 2048
	},
	{
		name: "Tracy",
		track: "full stack javascript",
		achievements: 45,
		points: 6538
	},
	{
		name: "Yoaks",
		track: "Android",
		achievements: 32,
		points: 4763
	}
];
var ranking = ["jason", "stanley", "asha", "tracy", "yoaks"];
function print(message) {
	document.write(message);
}

var html;
var ending;
var user_search;
var index;
do {
	user_search = prompt("Type the name of the student you wish to find details of, or type 'quit' to exit search and see result");
	index = ranking.indexOf(user_search);
	console.log(index);
	if (index >= 0 ) {
		html = "<ol>";
		html+= "<h2> Student: " + students[index].name + "</h2>";
		html += "<li>" + "Track" + ": " + students[index].track + "</li>";
		html += "<li>" + "Achievements" + ": " + students[index].achievements + "</li>";
		html += "<li>" + "Points" + ": " + students[index].points + "</li>";
		html += "</ol>";
		print(html);
	} else if (user_search.toLowerCase() === "quit" || user_search === null) {
		ending = true;
	} else {
		document.write("Sorry, "+user_search+" is not currently in our records");
		ending = true;
	}
		
} while (ending !== true);
console.log("challenge complete!!! program works!");
// challenge complete!!! program works!
