/*
 ** Global Variables
 */
var w;
var h;
var player = new Character();
var score;
var vehicles = [];
var hit = false;
/*
 **
 */
function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  var canvas = createCanvas(w, h);
  //  Initialize Objects
  for (var i = 0; i < 3; i++) {
    vehicles.push(new Vehicle());
  }
}

function draw() {
  clear();
  player.show(); //loads show

  for (var i = 0; i < vehicles.length; i++) {
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
  }
  if (hit === true) {
    window.alert("game over");
  }
  //move player down on the W key and up arrow key
  if (keyIsDown(87) && player.y > 10) {
    player.y -= player.speed;
    //distance needed to go to get point) {}
    document.getElementById("points").innerHTML++; //why just keep it "++"
  }
  //move player down on the S key and down arrow key
  if (keyIsDown(83) && player.y < h - 60) {
    player.y += player.speed;
    document.getElementById("points").innerHTML--;
  }
  //move player left on the A key and left arrow key
  if (keyIsDown(65) && player.x > 10) {
    player.x -= player.speed;
  }
  //move player right on the D key and the right arrow key
  if (keyIsDown(68) && player.x < w - 60) {
    player.x += player.speed;
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
