var marker;
var mrk_x;
var mrk_y;

function DSlider(name, pos_x, win_width, win_height, elastic_y) {
  this.pos_x = pos_x;
  this.pos_y = win_height/2 - win_height/8;
  this.x_size = win_width/4;
  this.y_size = win_width/4;
  this.marker_x = pos_x + win_width/8;
  this.marker_y = this.pos_y + this.y_size - win_width/8;
  this.marker = new Marker('red', this.pos_x, this.x_size + this.pos_x, this.pos_y, this.y_size + this.pos_y, this.marker_x, this.marker_y, win_width/20, elastic_y, true, false);
  document.getElementById(name).style.top = (this.pos_y - 100) + 'px';
  document.getElementById(name).style.left = this.pos_x + 'px';

  this.show = function() {
    fill(255);
    rect(this.pos_x, this.pos_y, this.x_size, this.y_size);
    this.marker.show();
    mrk_x = Math.round(1000 * (this.marker.pos_x - this.pos_x)/this.x_size + 1000);
    mrk_y = Math.round(-1000 * (this.marker.pos_y - this.pos_y)/this.y_size + 2000);
    document.getElementById(name).setAttribute('x', mrk_x);
    document.getElementById(name).setAttribute('y', mrk_y);
    document.getElementById(name).innerHTML = "X = " + mrk_x + " | Y = " + mrk_y;
  }
}