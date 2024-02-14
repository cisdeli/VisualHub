var n = 0;
var c = 4;


function setup() {
	createCanvas(400, 600);
	background(0);
	angleMode(DEGREES);
	colorMode(HSB);
}

function draw() {
	var o = n * 137.5;
	var r = c * sqrt(n);

	var x = r * cos(o) + width/2;
	var y = r * sin(o) + height/2;

	fill(n % 256, 255, 255);
	//fill((a - r) % 255, 255, 255);
	//noStroke();
	ellipse(x, y, 8 , 8);
	n++

}
