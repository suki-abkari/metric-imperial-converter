let inputRegex = /[a-z]+|[^a-z]+/gi;
function ConvertHandler() {

  this.getNum = function(input) {
    let result;
    let numReg = /\d/
    if (numReg.test(result) === false) {
      result = 1;
    }

    result = input.match(inputRegex)[0];
    if (result.toString().includes('/')) {
      let values = result.toString().split('/');
      if (values.lenght != 2) {
        return 'invalid number'
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0]/values[1]).toFixed(5))
    }
    // checks if the NUMBER received is in the array, if not, returns 'invalid unit'.
    if (isNaN(result)) {
      return 'invalid number'
    }
    return result;
  };

  this.getUnit = function(input) {
    let result;
    if (!result) {
      result = input.match(inputRegex)[0];
    }

    // checks if the UNIT received is in the array, if not, returns 'invalid unit'.
    acceptedUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    if (!acceptedUnits.includes(result)) {
      return 'invalid unit'
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    // GAL to L
    

    if(initUnit === 'gal' || initUnit === 'GAL'){
      result = 'l'
    }else if(initUnit === 'l' || initUnit === 'L'){
      result = 'gal'
    }
    // LBS to KG
    if(initUnit === 'lbs' || initUnit === 'LBS'){
      result = 'kg'
    }else if(initUnit === 'kg' || initUnit === 'KG'){
      result = 'lbs'
    }
     // Mi to Km
    if(initUnit === 'mi' || initUnit === 'MI'){
      result = 'km'
    }else if(initUnit === 'km' || initUnit === 'KM'){
      result = 'mi'
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    // GAL to L
    if(initUnit === 'gal' || initUnit === 'GAL'){
      result = (initNum * galToL).toFixed(5)
    }else if(initUnit === 'l' || initUnit === 'L'){
      result = (initNum/galToL).toFixed(5)
    }

    // LBS to KG
     if(initUnit === 'lbs' || initUnit === 'LBS'){
      result = (initNum * lbsToKg).toFixed(5)
    }else if(initUnit === 'kg' || initUnit === 'KG'){
      result = (initNum/lbsToKg).toFixed(5)
    }

    // Mi to Km
    if(initUnit === 'mi' || initUnit === 'MI'){
      result = (initNum * miToKm).toFixed(5)
    }else if(initUnit === 'km' || initUnit === 'KM'){
      result = (initNum/miToKm).toFixed(5)
    }
    return parseFloat(result);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };

}

module.exports = ConvertHandler;
