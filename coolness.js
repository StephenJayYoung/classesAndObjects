'use strict';

var Fun = require('./index');

function Friday() {
  Fun.apply(this, arguments);

  this._surfing = true;
  this._running = 'realll far';
  this._drinkingGoodBeer = true;
}
Friday.prototype = Object.create(Fun.prototype);
Friday.prototype.constructor = Friday;


Friday.prototype.weAreHavingFun = function() {
  return this._isFun;
};

Friday.prototype.somethingBAdHappenned = function() {
  console.log('Oh, no');
};

Friday.prototype.weAreHavingABadTime = function(peeled) {
  return somethingBAdHappenned;
};

Friday.prototype.isThisBAd = function() {
  this.badTime(true);
  console.log('man, we are not having fun. We should do something else, dude');
};

Friday.prototype.willThisBeCool = function() {
  var cool = Fun.prototype.willThisBeCool.call(this);

  if (cool) {
    // we are going to have a good time
    this.(weAreHavingFun);
  }

  return cool;
};

console.log(cool);


module.exports = index;



