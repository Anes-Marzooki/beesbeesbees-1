var HoneyMakerBee = function() {
  // Calls the Bee superclass on this class
  Bee.call(this);
  // owns props
  this.age = 10;
  this.honeyPot = 0;
  this.job = "make honey";
};

// setting the constructor & the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// Methods for the HoneyMakerBee class
// makeHoney
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
// giveHoney
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
