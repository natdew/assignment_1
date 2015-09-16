function setup() {
	// create a place to draw
	createCanvas(800, 500);
}

function draw() {
	// clear the background - skyblue
  background(150, 200, 255);

	// set a fill color white
	fill(255, 200, 90);
	// draw ground
	noStroke();
	rect(0, 300, 900, 10);


	fill(10, 240, 255);
	// rectangle
	rect(0, 300, 3000, 200);
	// set a fill color

	fill(255, 255, 255);
	// draw a circle
	ellipse(200, 90, 250, 90);

	fill(255, 255, 255);
	// draw a circle
	ellipse(600, 100, 200, 50);


	fill(240, 210, 200);
	// rectangle
	rect(330, 200, 200, 100);
	// set a fill color


	fill(150, 200, 255);
	// draw a circle
	ellipse(430, 200, 200, 100);


	// triangle
	fill(205, 255, 205);
	noStroke();
	triangle(420, 51, 420, 180, 341, 180);

	// triangle
	fill(205, 200, 0);
	noStroke();
	triangle(420, 50, 420, 180, 518, 180);


	fill(200, 210, 200);
	// rectangle
	rect(420, 50, 03, 200);
	// set a fill color

}
