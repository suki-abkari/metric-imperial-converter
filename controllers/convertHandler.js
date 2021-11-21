let inputRegex = /[a-z]+|[^a-z]+/gi;
function ConvertHandler() {

  this.getNum = function (input) {
    let result;
    result = input.match(inputRegex)[0];
    // checks if the NUMBER received is in the array, if not, returns 'invalid unit'.
    if (result == isNaN) {
      return 'invalid number'
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;
    result = input.match(inputRegex)[1];
    // checks if the UNIT received is in the array, if not, returns 'invalid unit'.
    acceptedUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    if (!acceptedUnits.includes(result)) {
      return 'invalid units'
    }

    // checks 'invalid unit'
 
    // checks 'invalid number'
   
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    // GAL to L
    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = 'l'
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = 'gal'
    }

    // LBS to KG
    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = 'kg'
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = 'lbs'
    }

    // Mi to Km
    if (initUnit === 'mi' || initUnit === 'MI') {
      result = 'km'
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = 'mi';
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    // GAL to L
    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = initNum * galToL
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = parseFloat((initNum / galToL).toFixed(5))
    }

    // LBS to KG
    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = initNum * lbsToKg
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = parseFloat((initNum / lbsToKg).toFixed(5))
    }

    // Mi to Km
    if (initUnit === 'mi' || initUnit === 'MI') {
      result = initNum * miToKm
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = parseFloat((initNum / miToKm).toFixed(5))
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
