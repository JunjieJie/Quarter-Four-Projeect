/*
 ** Global Variables
 */
var w;
var h;
var canvas;
var player;
var score;
var vehicles = [];
var moveUp;
var hit = false;
var occupiedRows = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
var testRoad;
var testSafeZone;
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
  canvas = createCanvas(w, h);
  player = new Player();
  testRoad = new Road();
  testSafeZone = new Safezone();
  //image(img, 10, 10, 50, 50);
  //  Initialize Objects
  /*for (var i = 0; i < 3; i++) {
    vehicles.push(new Vehicle());
  }*/
}

function draw() {
  clear();
  testRoad.show();
  testSafeZone.show();
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
  //move player down on the W key and up arrow key
  if (keyIsDown(87) && player.y - 0.1 * h > 0) {
    player.y -= player.speed;
    //distance needed to go to get point) {}
    document.getElementById("points").innerHTML++; //why just keep it "++"
  }
  //move player down on the S key and down arrow key
  if (keyIsDown(83) && player.y + 0.1 * h < h) {
    player.y += player.speed;
    document.getElementById("points").innerHTML--;
  }
  //move player left on the A key and left arrow key
  if (keyIsDown(65) && player.x - 0.1 * h > 0) {
    player.x -= player.speed;
  }
  //move player right on the D key and the right arrow key
  if (keyIsDown(68) && player.x < w - 0.1 * h) {
    player.x += player.speed;
  }
  if (testSafeZone.y == testRoad.y) {
    draw();
    console.log("AKSD");
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
