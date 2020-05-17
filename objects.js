/*
 **  Helper Objects
 */
function Vehicle(parentY) {
  //  Vehicle Properties
  this.height = 0.1 * h;
  this.width = 0.2 * w;
  this.direction = Math.round(Math.random());
  this.x = this.direction === 0 ? 0 - this.width : w + this.width;
  this.y = parentY;
  this.randSpeed = Math.floor(Math.random() * 35);
  this.speed = this.randSpeed < 10 ? 10 : this.randSpeed;
  this.isVisible = function () {
    if (this.y < 0 || this.y >= h) {
      return false;
    } else {
      return true;
    }
  };
  this.show = function () {
    if (this.isVisible) {
      if (this.direction === 0) {
        this.x += this.speed;
        if (this.x - this.width > w) {
          //checks if it goes off the screen and resets it if it does
          this.x = 0 - this.width;
          this.randSpeed = Math.floor(Math.random() * 50);
          this.speed = this.randSpeed < 10 ? 10 : this.randSpeed;
        }
      } else {
        this.x -= this.speed;
        if (this.x + this.width < 0) {
          //checks if it goes off the screen and resets it if it does
          this.x = w;
          this.randSpeed = Math.floor(Math.random() * 20);
          this.speed = this.randSpeed < 10 ? 10 : this.randSpeed;
        }
      }
      fill("yellow");
      rect(this.x, this.y, this.width, this.height);
      hit = collideRectRect(
        this.x,
        this.y,
        this.width,
        this.height,
        player.x,
        player.y,
        player.width,
        player.height
      );
    } else {
      noFill();
      rect(this.x, this.y, this.width, this.height);
      hit = false;
    }
  };
}

function Road(x, y) {
  this.x = x;
  this.y = y;
  this.height = 0.1 * h;
  this.width = w;
  this.isVisible = function () {
    if (this.y < 0 || this.y >= h) {
      return false;
    } else {
      return true;
    }
  };
  this.vehicles = [new Vehicle(this.y)];
  this.show = function () {
    if (this.isVisible) {
      this.height = 0.1 * h;
      this.width = w;
      fill("black");
      rect(this.x, this.y, this.width, this.height);
      noFill();
      for (let i = 0; i < this.vehicles.length; i++) {
        this.vehicles[i].y = this.y;
        this.vehicles[i].show();
      }
    } else {
      noFill();
      rect(this.x, this.y, this.width, this.height);
    }
    if (hit) {
      window.alert("game over");
    }
  };
}

function Safezone(x, y) {
  this.x = x;
  this.y = y;
  this.height = 0.1 * h;
  this.width = w;
  this.isVisible = function () {
    if (this.y < 0 || this.y > h) {
      return false;
    } else {
      return true;
    }
  };
  this.show = function () {
    if (this.isVisible) {
      this.height = 0.1 * h;
      this.width = w;
      fill("green");
      rect(this.x, this.y, this.width, this.height);
      noFill();
    } else {
      noFill();
      rect(this.x, this.y, this.width, this.height);
    }
  };
}

function Player() {
  //  Player Properties
  this.dimensions = [];
  this.x = w / 2;
  this.y = h - 0.1 * h + 5;
  this.height = 0.1 * h - 10;
  this.width = 0.1 * w;
  this.xSpeed = 0.1 * w;
  this.ySpeed = 0.1 * h;
  this.upPressed = 0;
  this.downPressed = 0;
  this.moveUp = function () {
    this.upPressed++;
    for (let i = 0; i < course.length; i++) {
      course[i].y += 0.1 * h;
    }
    console.log(this.upPressed);
  };
  this.moveDown = function () {
    this.downPressed++;
    console.log(this.downPressed);
    player.y += player.ySpeed / 2048;
    for (let i = 0; i < course.length; i++) {
      course[i].y -= 0.1 * h;
    }
  };
  this.moveRight = function () {
    player.x += player.xSpeed;
  };
  this.moveLeft = function () {
    player.x -= player.xSpeed;
  };
  this.show = function () {
    this.radius = 0.1 * h;
    this.xSpeed = 0.1 * w;
    this.ySpeed = 0.1 * h;
    fill("orange"); //so u cant make this a pic?
    rect(this.x, this.y, this.width, this.height);
    noFill();
  };
}
