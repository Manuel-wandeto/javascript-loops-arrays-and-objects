var playlist = [];

playlist.push("Holly grail", "wicked", "nicetown");
function printlist(message) {
	document.write(message);
}

function music(list) {
	var listhtml = "<ol>";
	for (var i = 0; i< list.length; i += 1) {
		listhtml += "<li>" + list[i] + "</li>";
		
	} 
	listhtml += "</ol>";
	printlist(listhtml);
}
music(playlist);

