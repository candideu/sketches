// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/40Me1-yAtTc

// The snake
var s;
// The scale of the grid
var scl = 20;
var cols;
var rows;

var music;

var fr = 3;

// This is the food location
var food;

var musicRate = 1;

function preload() {
  music = loadSound('athleisure.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.play();
  music.playMode('sustain');
  colorMode(HSB, 255);
  noStroke();
  cols = floor(width / scl);
  rows = floor(height / scl);

  s = new Snake();
  frameRate(fr);

  // Pick a food location
  pickLocation();
}

// Pick a food location
function pickLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

// Animation loop
function draw() {
  background(54);
  var len = music.duration();
  

  // If the snake eats the food
  if (s.eat(food)) {
    setTimeout(function(){
  Object.assign(music, {_playing: true});
  music.playMode('restart');
}, 100);
music.stop();
music.playMode('sustain');
    music.jump(random(len));
    frameRate(fr);
    pickLocation();
  }
  


  // Check if the snake hits itself or a wall
  s.death();
  // Update snake
  s.update();
  // Draw snake
  s.show();
  

  fill(150, 255, 255);
  rect(food.x, food.y, scl, scl);
}

// Moving the snake
function keyPressed() {
  //if (!hello.isPlaying()) {
  //hello.play();
  //}

  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }

  if (key == ' ') {
    s.total++;
  }
}
