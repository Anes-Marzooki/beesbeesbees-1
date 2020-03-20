// create a Bee class, in pseudoClassical style

var Bee = function() {
  // calls the Grub S.class on the Bee class
  Grub.call(this);
  // Bee's props
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
};

// setting up the constructo & the prototype for the Bee class
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
