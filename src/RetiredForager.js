var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

// constructor
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// Methods
RetiredForagerBee.prototype.forage = function() {
  return "I'm too old, let me play cards instead";
};
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};
