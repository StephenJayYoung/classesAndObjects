'use strict';

function Fun() {
  this._awesome = true;
}

/**
 * Returns true if this thing is awesome.
 *
 * @return {Boolean} Whether this will be an awesome activity.
 */

//setters set a value of a property (use return), getters provide a value of a property (use ._this)

Fun.prototype.surfing = function() {
  return this._surfing;
};

Fun.prototype.running = function() {
  return this._running;
};

Fun.prototype.drinkingGoodBeer = function() {
  return this._drinkingGoodBeer;
};

Fun.prototype.eatingGoodFood = function() {
  return this._eatingGoodFood;
};

Fun.prototype.doingLaundry = function() {
  return this._doingLaundry;
};

Fun.prototype.setdoingLaundry = function() {
  this.doingLaundry = doingLaundry;
}

Fun.prototype.pullingWeeds = function() {
  return this._pullingWeeds;
};

Fun.prototype.talkingAboutFootball = function() {
  return this._talkingAboutFootball;
};

Fun.prototype.PayingBills = function(calories) {
  return this._payingBills;
};

Fun.prototype.setTimeToPayBills = function(time) {
  this._payingBills = payingBills;
};

Fun.prototype.setFoodToEat = function(foods) {
  this._foodToEat = eatingGoodFood;
};


Fun.prototype.willThisBeCool = function() {
  var cool = true;
  if (this.payingBills()) { cool = false; }
  else if (this.pullingWeeds()) { cool = false; }
  else if (this.talkingAboutFootball()) { cool = false; }
  else if this.doingLaundry()) {cool = false};
};
  return cool;
};



module.exports = coolness;