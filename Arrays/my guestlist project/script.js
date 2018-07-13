function print(visitors) {
	document.write(visitors);
}
alert("Welcome to the guestlist builder app!");
alert("Lets help you build your guestlist");
var occasion = prompt("So what is the occasion?");
document.write("<h2>"+occasion+"");
var guests = [];
var ending = false;
var user_input;
var listhtml = "<ol>";
do {
	user_input = prompt("Type the name of your guests, if done, simply type done.");
	if (user_input.toUpperCase() !== "DONE") {
		guests.push(user_input);
	} else {
		for (var i = 0; i < guests.length; i += 1) {
			listhtml += "<li>" + guests[i] + "</li>";
		} 
		
		listhtml += "</ol>";
		print(listhtml);
		ending = true;
	}
	
} while (ending !== true);
// success at building my guestlist app!!!!














//prompt("Type the name of your guests, if done, simply type done.");
//prompt("is that it?");






