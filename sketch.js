var sliders = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	sliders.push(new DSlider(10, false));
	sliders.push(new DSlider(window.innerWidth - window.innerWidth/4 - 10, true));
}

function draw() {
	background(51);
	sliders[0].show();
	sliders[1].show();
}

function mousePressed() {
	sliders[0].marker.pressed(mouseX, mouseY);
	sliders[1].marker.pressed(mouseX, mouseY);
}

function mouseDragged() {
	sliders[0].marker.dragged(mouseX, mouseY);
	sliders[1].marker.dragged(mouseX, mouseY);
}

function mouseReleased() {
	sliders[0].marker.released();
	sliders[1].marker.released();
}