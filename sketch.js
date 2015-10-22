function setup() {
	// create a place to draw
	createCanvas(800, 500);
}

function draw() {
	// clear the background - skyblue
  background(32, 43, 97);


	fill(45, 48, 55);
	noStroke();
	rect(0, 340, 900, 200);

fill(171, 176, 190);
triangle(590, 280, 550, 280, 570, 100);

fill(255, 255, 255);
ellipse(565, 200, 10, 15);
ellipse(575, 200, 10, 15);
ellipse(200, 100, 100, 100);


fill(0, 0, 0);
ellipse(565, 200, 5, 5);
ellipse(575, 200, 5, 5);
rect(550, 280, 40, 90);

fill(32, 43, 97);
ellipse(230, 100, 100, 100);

s = "Mister Knife and the Dark Nights"
fill(0, 0, 0);
text(s, 600, 100, 100, 100);

}
