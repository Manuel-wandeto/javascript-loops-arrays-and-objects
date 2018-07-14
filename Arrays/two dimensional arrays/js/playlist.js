var playList = [
  ['I Did It My Way', 'Respect', 'Imagine', 'Born to Run', 'Louie Louie', 'Maybellene'],
  ['Frank sinatra', 'Aretha franklin', 'John lenon', 'Bruce springsteen', 'The kingsmen', 'Chuck berry']
];
function print(message) {
	document.write(message);
}
function engine(songs, artists) {
	var listhtml = "<ol>";
	for (var i = 0; i < songs.length; i += 1) {
		listhtml += "<li>" + songs[i] + " by " + artists[i] + "</li>"; 
	}
	listhtml += "</ol>"
	print(listhtml);
}
engine(playList[0], playList[1]);
console.log("Program finished successfully!");
// once again manuel did it!!! i have successfully made this playlist app!!!






















