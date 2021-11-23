const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  //1 Get number
  suite('Function convertHandler.getNum(input)', function() {
    // Whole number input
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32)
      done();
    })

    // read a decimal number input.
    test('Decimal Input', function(done) {
      var input = '3.25mi';
      assert.equal(convertHandler.getNum(input), 3.25);
      done();
    });
    // read a fractional input.
    test('Fractional Input', function(done) {
      var input = '12/8mi';
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });
  // read a fractional input with a decimal.
    test('Fractional Input with Decimal', function(done) {
      var input = '27/5.4mi';
      assert.equal(convertHandler.getNum(input), 5);
      done();
    });
    // return an error on a double-fraction (i.e. 3/2/3).
    test('Invalid Input (double fraction)', function(done) {
      var input = '3/7.2/4L';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });
    // default to a numerical input of 1 when no numerical
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      assert.equal(convertHandler.getUnit(input), 'kg');
      done();
    });
  });

  //2 Get Unit
  suite('Function convertHandler.getUnit(input)', function() {
    // For each valid unit input
    test('For each valid unit input', function(done) {
      let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
      input.forEach(function(element) {
        assert.equal(convertHandler.getUnit(32 + element), element)
      });
      done();
    })
  });

  //3 Get returnUnit
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    // For Each Valid Unit Inputs
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      let expected = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach(function(element, i) {
        assert.equal(convertHandler.getReturnUnit(element), expected[i])
      });
      done();
    });
     test('Unknown Unit Input', function(done) {
      let input = '32g';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });
  });
  //4 spellOutUnit
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      let expect = [
        'gallons',
        'litres',
        'miles',
        'kilometers',
        'pounds',
        'kilograms'
      ];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  // 5 Convert
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
