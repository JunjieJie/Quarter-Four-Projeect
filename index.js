/*
 ** Global Variables
 */
var w;
var h;
var canvas;
var player;
var score;
var vehicles;
var moveUp;
var hit;
var course;
var initialized;
var initialX;
var initialY;
//var testRoad;
//var testSafeZone;
var img;
/*
 **
 */
function preload() {
  img = loadImage(
    "https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  );
}

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  moveUp = 0;
  initialized = false;
  initialX = 0;
  initialY = h - 0.1 * h;
  hit = false;
  course = [];
  vehicles = [];
  canvas = createCanvas(w, h);
  player = new Player();
  for (var i = 0; i < 10; i++) {
    if (initialized === false) {
      course.push(new Safezone(initialX, initialY));
      initialized = true;
    } else {
      var randomNum = Math.round(Math.random() * 1);
      if (randomNum === 1) {
        course.push(new Road(initialX, initialY));
      } else {
        course.push(new Safezone(initialX, initialY));
      }
    }
    initialY -= 0.1 * h;
  }
}

function draw() {
  clear();
  //testRoad.show();
  //testSafeZone.show();
  //move player down on the W key and up arrow key
  if (keyIsDown(87) && player.y - 0.1 * h > 0) {
    console.log("hit");
    for (var i = 0; i < course.length; i++) {
      course[i].y += 0.1 * h;
      if (course[i].hasOwnProperty("vehicles")) {
        for (var g = 0; g < course[i].vehicles.length; g++) {
          course[i].vehicles[g].y += 0.1 * h;
        }
      }
    }
    player.y -= player.ySpeed;
    console.log(player.y);
    //distance needed to go to get point) {}
    document.getElementById("points").innerHTML++; //why just keep it "++"
  }
  //move player down on the S key and down arrow key
  if (keyIsDown(83) && player.y + 0.1 * h < h) {
    player.y += player.ySpeed;
    for (var i = 0; i < course.length; i++) {
      course[i].y -= 0.1 * h;
      if (course[i].hasOwnProperty("vehicles")) {
        for (var g = 0; g < course[i].vehicles.length; g++) {
          course[i].vehicles[g].y -= 0.1 * h;
        }
      }
      moveUp = 0;
    }
    document.getElementById("points").innerHTML--;
  }
  //move player left on the A key and left arrow key
  if (keyIsDown(65) && player.x - 0.1 * w > 0) {
    player.x -= player.xSpeed;
  }
  //move player right on the D key and the right arrow key
  if (keyIsDown(68) && player.x < w - 0.1 * w) {
    player.x += player.xSpeed;
  }
  for (var i = 0; i < course.length; i++) {
    course[i].show();
  }
  player.show(); //loads show
  /*for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].show();
    vehicles[i].update();
    collideRectCircle(
      vehicles[i].x,
      vehicles[i].y,
      100,
      50,
      player.x,
      player.y,
      0.1 * h
    );
  }*/
  if (hit === true) {
    console.log("game over");
  }
}

/*
 ** Helper Functions
 */
// Responsive Canvas
function windowResized() {
  w = window.innerWidth;
  h = window.innerHeight;
  resizeCanvas(w, h);
}
