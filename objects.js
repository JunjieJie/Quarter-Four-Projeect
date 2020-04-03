/*
 **  Helper Objects
 */
function Vehicle() {
  //  Vehicle Properties
  this.dimensions = [];
  this.height = 0.1 * h;
  this.width = 50 + Math.floor(Math.random() * 10);
  this.x = w + this.width;
  this.y = Math.floor(Math.random() * 10) * 0.1 * h;
  this.speed = 10; //I still don't understand how this speeds gonna work - JJ
  this.show = function () {
    fill("yellow");
    rect(this.x, this.y, this.width, this.height);
  };
  this.update = function () {
    this.x -= this.speed;
    if (this.x < 0) {
      //checks if it goes off the screen and resets it if it does
      this.x = w;
      this.y = h; //the starting position
      this.x -= this.speed;
    }
  };
}

function Player() {
  //  Player Properties
  this.dimensions = [];
  this.x = w / 2;
  this.y = h - 0.5 * 0.1 * h;
  this.speed = 0.1 * h;
  this.show = function () {
    fill("orange"); //so u cant make this a pic?
    circle(this.x, this.y, 0.1 * h);
    console.log("your dad");
  };
}
