function setup() {
	// create a place to draw
	createCanvas(800, 500);
}

function draw() {
	// clear the background - skyblue
  background(32, 43, 97);

//ground
	fill(45, 48, 55);
	noStroke();
	rect(0, 340, 900, 200);

//mister knife
fill(171, 176, 190);
triangle(590, 280, 550, 280, 570, 100);
//eyes
fill(255, 255, 255);
ellipse(565, 200, 10, 15);
ellipse(575, 200, 10, 15);
//pupils
fill(0, 0, 0);
ellipse(565, 200, 5, 5);
ellipse(575, 200, 5, 5);
rect(550, 280, 40, 90);

//moon
fill(255, 255, 255);
ellipse(300, 100, 100, 100);
//cut out part of the moon to make it a crescent
fill(32, 43, 97);
ellipse(330, 100, 100, 100);

//text
s = "Mister Knife and the Dark Nights"
fill(0, 0, 0);
text(s, 550, 40, 200, 200);

//trees
fill(45, 32, 34);
rect(40, 40, 30, 350);
rect(430, 60, 20, 300);

fill(36, 41, 40);
ellipse(60, 60, 300, 200);
ellipse(445, 80, 200, 100)

}
