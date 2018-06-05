const assert = require('assert');
const WaterBottle = require('../water_bottle.js');

//behaviour driven development
describe('Water Bottle', function(){
  it("should be empty at start", function(){
    const bottle = new WaterBottle();
    assert.strictEqual(bottle.volume, 0);
  });

  it("should go to 100 when filled", function(){
    const bottle = new WaterBottle();
    bottle.fill();
    assert.strictEqual(bottle.volume, 100);
  });

  it("should go down by 10 when drunk from", function(){
    const bottle = new WaterBottle();
    bottle.fill();
    bottle.drink();
    assert.strictEqual(bottle.volume, 90);
  });

  it("Should not be able to go below 0", function(){
    const bottle = new WaterBottle();
    bottle.drink();
    assert.strictEqual(bottle.volume, 0);
  });

  it("should go to 0 when emptied", function(){
    const bottle = new WaterBottle();
    bottle.fill();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0);
  })


});



// Should go down by 10 when drunk from
// Should go to 0 when emptied
// Should not be able to go below 0
