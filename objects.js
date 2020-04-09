/*
 **  Helper Objects
 */
function Vehicle(y) {
  //  Vehicle Properties
  this.dimensions = [];
  this.height = 0.1 * h;
  this.width = 50;
  this.x = w + this.width;
  this.y = y;
  this.speed = 10; //I still don't understand how this speeds gonna work - JJ
  this.show = function () {
    fill("yellow");
    //texture(img);
    //image(img, this.x, this.y, this.width, this.height);
    rect(this.x, this.y, this.width, this.height);
    noFill();
  };
  this.update = function () {
    this.x -= this.speed;
    if (this.x < 0) {
      //checks if it goes off the screen and resets it if it does
      this.x = w;
      this.x -= this.speed;
    }
  };
}

function Road() {
  this.x = 0;
  this.y = Math.floor(Math.random(10)) * 0.1 * h;
  this.height = 0.1 * h;
  this.width = w;
  this.vehicles = [new Vehicle(this.y)];
  this.show = function () {
    fill("black");
    rect(this.x, this.y, this.width, this.height);
    noFill();
    for (var i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].show();
      hit = collideRectCircle(
        this.vehicles[i].x,
        this.vehicles[i].y,
        100,
        50,
        player.x,
        player.y,
        0.1 * h
      );
      this.vehicles[i].update();
    }
  };
}

function Safezone() {
  this.x = 0;
  this.y = Math.floor(Math.random(10)) * 0.1 * h;
  this.height = 0.1 * h;
  this.width = w;
  this.show = function () {
    fill("green");
    rect(this.x, this.y, this.width, this.height);
    noFill();
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
    noFill();
  };
}
