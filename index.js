/*
 ** Global variables
 */
let width, height, canvas, course, player, score;
let isInitialized, initialX, initialY;
var hit;

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  initialized = false;
  initialX = 0;
  initialY = h - 0.1 * h;
  hit = false;
  course = [];
  vehicles = [];
  canvas = createCanvas(w, h);
  score = 0;
  initialize(1000);
}

function draw() {
  clear();
  for (var i = 0; i < course.length; i++) {
    course[i].show();
  }
  player.show();
}

function keyPressed() {
  //move player down on the W key and up arrow key
  if (keyCode == 87 && player.y - 0.1 * h > 0) {
    player.moveUp();
    //distance needed to go to get point) {}
    score++;
    document.getElementById("points").innerHTML = `Score: ${score}`; //why just keep it "++"
  }
  //move player down on the S key and down arrow key
  if (keyCode == 83 && player.y + 0.1 * h < h) {
    player.moveDown();
    document.getElementById("points").innerHTML--;
  }
  //move player left on the A key and left arrow key
  if (keyCode == 65 && player.x - 0.1 * w > 0) {
    player.moveLeft();
  }
  //move player right on the D key and the right arrow key
  if (keyCode == 68 && player.x < w - 0.1 * w) {
    player.moveRight();
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
