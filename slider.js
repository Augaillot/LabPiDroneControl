var marker;
var mrk_x;

function Slider(name, pos_y, win_width, win_height) {
  this.x_size = win_width/4;
  this.y_size = win_width/40;
  this.pos_x = win_width/2 - this.x_size/2;
  this.pos_y = pos_y;
  this.marker_x = this.pos_x;
  this.marker_y = this.pos_y + this.y_size/2;
  this.marker = new Marker('blue', this.pos_x, this.x_size + this.pos_x, this.pos_y, this.y_size + this.pos_y, this.marker_x, this.marker_y, win_width/20, false, false, true);
  document.getElementById(name).style.top = (this.pos_y - 100) + 'px';
  document.getElementById(name).style.left = this.pos_x + 'px';

  this.show = function() {
    fill('#fae');
    rect(this.pos_x, this.pos_y, this.x_size, this.y_size);
    this.marker.show();
    mrk_x = 10 * (this.marker.pos_x - this.pos_x)/this.x_size;
    document.getElementById(name).innerHTML = "X = " + mrk_x;
  }
}