var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}
var ending = false;
var user_search;
do {
	user_search = prompt("search products in our store, type \"list\" to show all the produce and \"quit\" to exit and see results");
	if (user_search.toUpperCase() === "LIST") {
		var allproducts = inStock.join(", ");
		print("We have "+allproducts+"");
		ending = true;
	} else if (user_search.toUpperCase() === "QUIT") {
		ending = true;
	} else {
		search = inStock.indexOf(user_search);
		if (search < 0) {
			document.write("<h2>sorry we do not have "+user_search+" as of now, maybe search at a later date");
		} else {
			document.write("<h2>Yeees!! we do have "+user_search+" in stock.");
		}
	}
	
	
	
} while (ending !== true);

//prompt("search products in our store, type "list" to show all the produce and "quit" to exit and see results");

/* Important note 
The behavior of most browsers has changed since this video was shot, so you won't see the same thing as I demonstrate in the video. In the video, you'll see that my script is able to print out to the browser using document.write( ) while inside a loop.

Most browsers no longer do that: they wait until the loop finishes and then they print to the window. So, you'll see a blank page until you type quit in the prompt window — then you'll see all the output printed to the screen.*/

// SUCCESSS AT BUILDING MY STORE SEARCH ENGINE!!!!