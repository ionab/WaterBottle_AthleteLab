const WaterBottle = function() {
  this.volume = 0;
  this.hydration;
};

WaterBottle.prototype.fill = function () {
  this.volume = 100;
};

WaterBottle.prototype.drink = function () {
  if (this.volume >= 10){
    this.volume -= 10;
    this.hydration = 10;
  } else {
    this.volume = 0;

  };
};

WaterBottle.prototype.empty = function () {
  this.volume = 0;
};

module.exports = WaterBottle;
