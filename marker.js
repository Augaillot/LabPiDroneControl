function Marker(limit_x_min, limit_x_max, limit_y_min, limit_y_max, pos_x, pos_y, diameter, elastic_y) {
	this.pos_x = pos_x;
	this.pos_y = pos_y;
	this.initial_x = pos_x;
	this.initial_y = pos_y;
	this.diameter = diameter;
	this.elastic_y = elastic_y;
	this.limit_x_min = limit_x_min;
	this.limit_x_max = limit_x_max;
	this.limit_y_min = limit_y_min;
	this.limit_y_max = limit_y_max;
	this.move = false;

	this.show = function() {
		if(this.pos_x < this.limit_x_min) this.pos_x = this.limit_x_min;
		if(this.pos_x > this.limit_x_max) this.pos_x = this.limit_x_max;
		if(this.pos_y < this.limit_y_min) this.pos_y = this.limit_y_min;
		if(this.pos_y > this.limit_y_max) this.pos_y = this.limit_y_max;
		fill('red');
		ellipse(this.pos_x, this.pos_y, this.diameter);
	}

	this.pressed = function(X, Y) {
		var d = dist(X, Y, this.pos_x, this.pos_y);
		if(d < this.diameter/2){
			this.move = true;
		}
	}

	this.dragged = function(X, Y) {
		if(this.move == true)  {
			this.pos_x = X;
			this.pos_y = Y;
		}
	}

	this.released = function() {
		this.pos_x = this.initial_x;
		if(this.elastic_y == true) this.pos_y = this.initial_y;
		this.move = false;
	}
}