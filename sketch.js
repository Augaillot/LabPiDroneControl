var dsliders = [];
var sliders = [];
var height;
var width;

function setup() {
	height = window.innerHeight;
	width = window.innerWidth;
	createCanvas(width, height);
	dsliders.push(new DSlider('pos2ds1', 50, width, height, false));
	dsliders.push(new DSlider('pos2ds2', width - width/4 - 50, width, height, true));
	sliders.push(new Slider('poss1', height/4, width, height));
	sliders.push(new Slider('poss2', height/2, width, height));
	sliders.push(new Slider('poss3', 3*height/4, width, height));
}

function draw() {
	background(51);
	dsliders[0].show();
	dsliders[1].show();
	sliders[0].show();
	sliders[1].show();
	sliders[2].show();
}

function mousePressed() {
	dsliders[0].marker.pressed(mouseX, mouseY);
	dsliders[1].marker.pressed(mouseX, mouseY);
	sliders[0].marker.pressed(mouseX, mouseY);
	sliders[1].marker.pressed(mouseX, mouseY);
	sliders[2].marker.pressed(mouseX, mouseY);
}

function mouseDragged() {
	dsliders[0].marker.dragged(mouseX, mouseY);
	dsliders[1].marker.dragged(mouseX, mouseY);
	sliders[0].marker.dragged(mouseX, mouseY);
	sliders[1].marker.dragged(mouseX, mouseY);
	sliders[2].marker.dragged(mouseX, mouseY);
}

function mouseReleased() {
	dsliders[0].marker.released();
	dsliders[1].marker.released();
	sliders[0].marker.released();
	sliders[1].marker.released();
	sliders[2].marker.released();
}