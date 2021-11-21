const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  suite('Function converterHandler.getNum(input)', function() {
    // Whole number input
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    // Decimal input 
    test('Decimal input', function(done) {
      let input = '20.5kg';
      assert.equal(convertHandler.getNum(input), 20.5);
      done();
    });

    // Fractional input 
    test('Fractional input', function(done) {
      let input = '12/8mi';
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });

    // Fractional input w/ decimal    
    test('Fractional input w/ decimal', function(done) {
      let input = '27/5.4mi';
      assert.equal(convertHandler.getNum(input), 5);
      done();
    });

    // Invalid input (double fraction)
    test('Invalid input (double fraction)', function(done) {
      let input = '3/7.2/4L';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });

    // No numerical input
    test('No numerical input', function(done) {
      let input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      assert.equal(convertHandler.getUnit(input), 'kg');
      done();
    })
  })

  // Test Units
  suite('Function converterHandler(num, unit)', function() {
    // Gal to L
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    })

    // L to Gal 
    test('L to GAL', function(done) {
      let input = [5, 'l'];
      let expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
      done();
    })

    // LBS to KG
    test('Lbs to Kg', function(done) {
      let input = [5, 'lbs'];
      let expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    // KG LBS
    test('Kg to Lbs', function(done) {
      let input = [5, 'kg'];
      let expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });

    // Mi to Km
    test('Mi to km', function(done) {
      let input = [5, 'mi'];
      let expected = 8.04672;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    // Km to Mi
    test('Km to mi', function(done) {
      let input = [5, 'km'];
      let expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
  })
});