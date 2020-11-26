
function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
	var randomX = Math.floor(Math.random() * x);
	var randomY = Math.floor(Math.random() * y);
 	return [randomX, randomY];
 }

function insertImage(imgArray) {
 	var img = document.createElement('img');
	img.setAttribute("style", "position:absolute;");
	img.setAttribute("src", imgArray[Math.floor(Math.random() * imgArray.length)]);

 	document.body.appendChild(img);
	var xy = getRandomPosition(img);
 	img.style.top = xy[0] + 'px';
 	img.style.left = xy[1] + 'px';
 }

 window.onload = function () {
 	var sweaters = ["sup01.jpg", "sup02.jpg", "sup03.jpg", "sup04.png", "sup05.png", "sup06.png", "sup07.jpeg", "sup08.png"];
 	var flowers = ["flower.png"];

 	setInterval(function () {
 		insertImage(sweaters)
 	}, 3000);

 	setInterval(function () {
 		insertImage(flowers)
 	}, 2000);
 }
