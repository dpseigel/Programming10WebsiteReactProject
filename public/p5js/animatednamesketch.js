let x = 100;
let y = 200;
let past_x = x;
let past_y = y;


let vel_x = 4;
let vel_y = 4;

const screen_size = 400;

let lines = [];

function setup() {
  createCanvas(screen_size, screen_size);
  background(220);
  colorMode(HSB);
}

function draw() {

  x += vel_x;
  y += vel_y;
  textSize(20);


  text("Thomas", x, y);
  check_bounds(x, y);
  past_x = x;
  past_y = y;
  stroke(random(0, 255), 90, 90);
}

function check_bounds(x, y) {
  if (x > screen_size - 70 || x < 0) {
    vel_x = random(-vel_x - 1, -vel_x + 1);
  }
  if (y > screen_size || y < 10) {
    vel_y = random(-vel_y - 1, -vel_y + 1);
  }
}