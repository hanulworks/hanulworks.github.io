/** Turtle graphics for p5 (degrees clockwise from east). See Wikipedia “Turtle graphics”. */
function Turtle(x, y) {
  if (typeof x === "undefined") {
    x = width * 0.5;
  }
  if (typeof y === "undefined") {
    y = height * 0.5;
  }
  this.x = x;
  this.y = y;
  this.bearingRadians = 0;
  this.isPenDown = true;
  this._stateStack = [];
}

Turtle.prototype.moveTo = function (newX, newY) {
  if (this.isPenDown) {
    line(this.x, this.y, newX, newY);
  }
  this.x = newX;
  this.y = newY;
};

Turtle.prototype.moveForward = function (distance) {
  var newX = this.x + cos(this.bearingRadians) * distance;
  var newY = this.y + sin(this.bearingRadians) * distance;
  this.moveTo(newX, newY);
};

Turtle.prototype.moveBackward = function (distance) {
  this.moveForward(-distance);
};

Turtle.prototype.turnTo = function (angleDegrees) {
  this.bearingRadians = radians(angleDegrees);
};

Turtle.prototype.turnRight = function (amountDegrees) {
  this.bearingRadians += radians(amountDegrees);
};

Turtle.prototype.turnLeft = function (amountDegrees) {
  this.bearingRadians -= radians(amountDegrees);
};

Turtle.prototype.penUp = function () {
  this.isPenDown = false;
};

Turtle.prototype.penDown = function () {
  this.isPenDown = true;
};

Turtle.prototype.pushState = function () {
  this._stateStack.push({
    x: this.x,
    y: this.y,
    bearingRadians: this.bearingRadians,
    isPenDown: this.isPenDown
  });
};

Turtle.prototype.popState = function () {
  if (this._stateStack.length === 0) {
    console.error(
      "Turtle: No states left on stack. Make sure your calls to .pushState and .popState are balanced."
    );
    return;
  }
  var state = this._stateStack.pop();
  this.x = state.x;
  this.y = state.y;
  this.bearingRadians = state.bearingRadians;
  this.isPenDown = state.isPenDown;
};

Turtle.prototype.image = function (i, w, h) {
  push();
  translate(this.x, this.y);
  rotate(this.bearingRadians + PI * 0.5);
  imageMode(CENTER);
  image(i, 0, 0, w, h);
  pop();
};
