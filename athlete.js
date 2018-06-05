


const Athlete = function(){
  this.hydration = 100;
  this.distance = 0;
}

Athlete.prototype.run = function (miles) {
  if(miles <= this.hydration){
  this.distance += miles;
  this.hydration -= miles;
}
};

Athlete.prototype.drink = function (bottle) {
  bottle.drink();
  this.hydration += bottle.hydration;
};




module.exports = Athlete;
