var marker;

function DSlider(pos_x, elastic_y) {
  this.pos_x = pos_x;
  this.pos_y = window.innerHeight/2 - window.innerWidth/8;
  this.x_size = window.innerWidth/4;
  this.y_size = window.innerWidth/4;
  this.xmax = 2000;
  this.ymax = 2000;
  this.marker_x = pos_x + window.innerWidth/8;
  this.marker_y = this.pos_y + this.y_size - window.innerWidth/8;
  this.marker = new Marker(this.pos_x, this.x_size + this.pos_x, this.pos_y, this.y_size + this.pos_y, this.marker_x, this.marker_y, window.innerWidth/20, elastic_y);

  this.show = function() {
    fill(255);
    rect(this.pos_x, this.pos_y, this.x_size, this.y_size);
    this.marker.show();
  }
}