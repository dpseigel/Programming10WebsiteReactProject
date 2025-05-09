const blink_length = 20;
const max_blink_timer = 300;
let blink_timer = max_blink_timer;

const mouth_timer_max = 400;
let mouth_timer = mouth_timer_max;
let mouthClosed = true;

let arm_dist = 80;

let score = 0;

class Particle {
  constructor(x, y, vel_x, vel_y) {
    this.x = x;
    this.y = y;
    this.vel_x = vel_x;
    this.vel_y = vel_y
  }
  
  update() {
    this.vel_y += 1;
    this.vel_x = lerp(this.vel_x, 0, 0.1);
    this.x += this.vel_x;
    this.y += this.vel_y;
    this.draw();
  }
  
  draw() {
    circle(this.x, this.y, 7);
  }
  
}


class Fly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = 0;
    this.explosion_particles = [];
  }

  update() {
    this.x += random(1, 5);
    this.s += 0.1;
    if (this.x > 400) {
      this.reset();
    }
    this.draw();
  
    this.explosion_particles.forEach(this.particle_update);
    if (mouseIsPressed) {
      if (mouseX > this.x - 70 && mouseX < this.x + 70) {
        if (mouseY > this.y - 70 && mouseY < this.y + 70) {
          this.die();
        }
      }
    }
  }
  
  particle_update(value, index, array) {
    value.update();
    if (value.y >= 400) {
      array.splice(index, 1);
    }
  }
  
  draw() {
    circle(this.x, this.y + sin(this.s) * 40, sin(this.s) * 10 + 5);
  }

  reset() {
    this.x = -300;
    this.y = random(0, 400);
  }
  
  die() {
    this.explosion_particles.push(new Particle(this.x, this.y, 0, -8));
    this.explosion_particles.push(new Particle(this.x, this.y, -1, -4));
    this.explosion_particles.push(new Particle(this.x, this.y, 1, -2));
    this.reset();
    score += 100;
  }
}

const fly = new Fly(-300, 60);
// const flytwo = new Fly(-200, 300);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(40);
  if (score > 0) {
      text(score, 20, 50);
  }
  body();
  mouth();

  eyes();

  hair();
  // rect(170, 420, 60, -score/10)
  arms();
  fly.update();
  // flytwo.update();
}

function body() {
  strokeWeight(5);
  rect(100, 200, 200, 400, 20);
  circle(200, 120, 200);
}

function eyes() {
  blink_timer -= 1;
  line(140, 80, 180, 75  + (20 * mouseY/400));
  line(220, 75 + (20 * mouseY/400), 260, 80);
  if (blink_timer > 0) {
    circle(160, 120, 40);
  } else {
    line(140, 120, 180, 120);
  }
  if (blink_timer > -5) {
    circle(240, 120, 40);
  } else {
    line(220, 120, 260, 120);
  }
  if (blink_timer <= -blink_length) {
    blink_timer = random(0, max_blink_timer);
  }
}

function mouth() {
  mouth_timer -= 1;
  if (mouth_timer <= 0) {
    mouthClosed = !mouthClosed;
    mouth_timer = mouth_timer_max;
  }

  if (mouthClosed) {
    line(200, 160, 230, 160);
  } else {
    circle(200, 160, 30);
  }
}

function hair() {
  line(200, 17, random(190, 210), 4);
  line(200, 17, random(190, 210), 4);
  line(200, 17, random(190, 210), 4);
}

function arms() {
  if (mouseIsPressed) {
    arm_dist = 10;
  } else {
    arm_dist = 80;
  }

  strokeWeight(100);
  line(100, 245, mouseX - arm_dist, mouseY);
  line(300, 245, mouseX + arm_dist, mouseY);
  strokeWeight(5);
}
