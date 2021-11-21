const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    // Get number test 
    suite('Function converterHandler.getNum(input)', function () {
        test('input', function (done) {
            let input = '32i';
            assert.equal(convertHandler.getNum(input), 32);
            done();
        })
    })

    // Get unit
    suite('Function converterHandler.getUnit(input)', function () {
        test('For Each Valid Unit Inputs', function (done) {
            var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
            input.forEach(function (ele) {
                assert.equal(convertHandler.getUnit(32 + ele), ele)
            });
            done();
        });

        // checks 'invalid unit'
        test('Unknown Unit Input', function (done) {
            let input = '32g'
            let expected = 'invalid unit'
            assert.equal(convertHandler.getUnit(input), expected)
            done()
        });

        // checks 'invalid number'
        test('Invalid Input (double fraction)', function (done) {
            let input = '3/7.2/4kg'
            let expected = 'invalid number'
            assert.equal(convertHandler.getNum(input), expected)
        });


    })

    // Test Units
    suite('Function converterHandler(num, unit)', function () {
        // Gal to L
        test('Gal to L', function (done) {
            let input = [5, 'gal'];
            let expected = 18.9271;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done();
        })
        // L to Gal 
        test('Gal to L', function (done) {
            let input = [5, 'L'];
            let expected = 1.32086;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1)
            done();
        })

        // LBS to KG
        test('Lbs to Kg', function (done) {
            var input = [5, 'lbs'];
            var expected = 2.26796;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });
        // KG LBS
        test('Kg to Lbs', function (done) {
            var input = [5, 'kg'];
            var expected = 11.0231;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        // Mi to Km
        test('Mi to km', function (done) {
            var input = [5, 'mi'];
            var expected = 8.04672;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });
        // Km to Mi
        test('Km to mi', function (done) {
            var input = [5, 'km'];
            var expected = 3.10686;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });
    })
});