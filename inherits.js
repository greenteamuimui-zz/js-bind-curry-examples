// Function.prototype.inherits = function(parent) {
//   const Surrogate = function () { };
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constuctor = this;
// };


Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constuctor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Ship.prototype.move = function () {
  console.log("moves");
};

let as = new Asteroid ();
let sh = new Ship ();

console.log(sh.move());
console.log(as.move());
