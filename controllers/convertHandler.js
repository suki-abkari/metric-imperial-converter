let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {

  this.getNum = function(input) {
    let result;

    result = input.match(inputRegex)[0]

    let numberRegex = /\d/

    if (numberRegex.test(result) === false) {
      result = 1
    }

    if (result.toString().includes('/')) {
      let values = result.toString().split('/')
      if (values.length != 2) {
        return 'invalid number'
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0] / values[1]).toFixed(5))
    }

    if (isNaN(result)) {
      return 'invalid number'
    }

    return result;
  };

  this.getUnit = function(input) {
    let result;

    result = input.match(inputRegex)[1]

    if (!result) {
      result = input.match(inputRegex)[0]
    }

    let validUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'GAL', 'MI', 'KM', 'LBS', 'KG'];
    if (result === 'l') {
      result = 'L'
    }
    if (result === 'GAL') {
      result = 'gal'
    }
    if (result === 'LBS') {
      result = 'lbs'
    }
    if (result === 'KG') {
      result = 'kg'
    }
    if (result === 'MI') {
      result = 'mi'
    }
    if (result === 'KM') {
      result = 'km'
    }





    if (!validUnits.includes(result)) {
      return 'invalid unit'
    }

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = 'L'
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = 'gal'
    }

    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = 'kg'
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = 'lbs'
    }

    if (initUnit === 'mi' || initUnit === 'MI') {
      result = 'km'
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = 'mi'
    }
    if (result !== undefined) {
      return result;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    switch (unit) {
      case 'gal':
      case 'GAL':
        result = 'gallons';
        break;
      case 'l':
      case 'L':
        result = 'litres';
        break;
      case 'lbs':
      case 'LBs':
        result = 'pounds';
        break;
      case 'kg':
      case 'KG':
        result = 'kilograms';
        break;
      case 'mi':
      case 'MI':
        result = 'miles';
        break;
      case 'km':
      case 'KM':
        result = 'kilometers';
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = (initNum * galToL).toFixed(5)
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = (initNum / galToL).toFixed(5)
    }

    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = (initNum * lbsToKg).toFixed(5)
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = (initNum / lbsToKg).toFixed(5)
    }

    if (initUnit === 'mi' || initUnit === 'MI') {
      result = (initNum * miToKm).toFixed(5)
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = (initNum / miToKm).toFixed(5)
    }

    return parseFloat(result);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

  };

}

module.exports = ConvertHandler;
