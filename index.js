'use strict';

var Fun = require('./coolness');

function Saturday() {
  Fun.apply(this, arguments);

  this._surfing = true;
  this._running = 'realll far';
  this._drinkingGoodBeer = true;
}
Friday.prototype = Object.create(Fun.prototype);
Friday.prototype.constructor = Friday;


Fun.prototype.weAreHavingFun = function() {
  return this._isFun;
};

Fun.prototype.weAreHavingABadTime = function(peeled) {
  this._badTime = badBAdBAd;
  // if we call our setter function, it sets the original
};

Fun.prototype.isThisBAd = function() {
  this.badTime(true);
  console.log('man, we are not having fun. We should do something else, dude');
};

Fun.prototype.willThisBeCool = function() {
  var cool = Fun.prototype.willThisBeCool.call(this);

  if (safe) {
    // we need to peel the banana now
    this.();
  }

  return safe;
};

module.exports = coolness;