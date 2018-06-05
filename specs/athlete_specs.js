// 1. Athlete should have a hydration attribute that starts at 100.
// 2. Athlete should have a distance covered attribute starts at 0.
// 3. Athlete should be able to run:  increasing distance, decreasing hydration.
// 4. Athlete should not move when running dehydrated: hydration at 0;
// 5. Athlete should be able to increase hydration by drinking from water bottle
// 6. Use Mocha's `beforeEach()` to create a new instance of WaterBottle and Athlete before each test.


const assert = require("assert");
const Athlete = require("../athlete.js")
const WaterBottle = require("../water_bottle.js")

describe("Athlete", function(){

  let athlete;
  let bottle;

  beforeEach(function(){
    athlete = new Athlete();
    bottle = new WaterBottle();
  });


  it("should have a hydration attribute that starts at 100", function(){
    // const athlete = new Athlete();
    assert.strictEqual(athlete.hydration, 100);
  });

  it('should have a distance covered attribute starts at 0', function(){
    assert.strictEqual(athlete.distance, 0);
  });

  it('should be able to run: increasing distance, decreasing hydration', function(){
    athlete.run(10);
    assert.strictEqual(athlete.distance, 10);
    assert.strictEqual(athlete.hydration, 90);
  });

  it('should not move when running dehydrated: hydration at 0', function(){
    athlete.run(100);
    assert.strictEqual(athlete.hydration, 0);
    athlete.run(10);
    assert.strictEqual(athlete.distance, 100);
  });

  it('should be able to increase hydration by drinking from water bottle', function(){
    athlete.run(10);
    assert.strictEqual(athlete.hydration, 90);
    bottle.fill();
    athlete.drink(bottle);
    assert.strictEqual(athlete.hydration, 100);
  });




});
