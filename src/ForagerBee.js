var ForagerBee = function() {
  // calls Bee on this (color, food, eat)
  Bee.call(this);
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
  this.treasureChest = [];
};

// Constructor
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// Methods
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
