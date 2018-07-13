var html = '';
var rgbColor;
function algorithm() {
	return Math.floor(Math.random() * 256 );
}
for (var i = 0; i < 10; i +=1 ) {
	rgbColor = 'rgb(' + algorithm() + ',' + algorithm() + ',' + algorithm() + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';	
}
document.write(html);