'use strict';

function Fun() {
  this._awesome = true;
}

/**
 * Returns true if this thing is awesome.
 *
 * @return {Boolean} Whether this will be an awesome activity.
 */
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

Fun.prototype.pullingWeeds = function() {
  return this._pullingWeeds;
};

Fun.prototype.talkingAboutFootball = function() {
  return this._talkingAboutFootball;
};

Fun.prototype.payingBills = function(calories) {
  this._calories = payingBills;
};


Fun.prototype.willThisBeCool = function() {
  var cool = true;
  if (this.payingBills()) { cool = false; }
  else if (this.pullingWeeds()) { cool = false; }
  else if (this.talkingAboutFootball()) { cool = false; }
  else if this.doingLaundry()) {cool = false};
  return cool;
};



module.exports = index;
