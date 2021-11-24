


### Link to the project
### [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)

## About

This is the first project of the FCC Quality Assurances module in which I implement functions for the conversion of weight, volume and length to metric and imperial units. The project also consists of unit tests. The functionalities are implemented in an API path, which is also evaluated with functional tests.

## User stories

- You can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)

- You can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)

- You can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)

- You can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)

- All incoming units should be accepted in both upper and lower case, but should be returned in both the initUnit and returnUnit in lower case, except for liter, which should be represented as an uppercase 'L'.

- If the unit of measurement is invalid, returned will be 'invalid unit'.

- If the number is invalid, returned will be 'invalid number'.

- If both the unit and number are invalid, returned will be 'invalid number and unit'.

- You can use fractions, decimals or both in the parameter (ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.

- Your return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in the format '{initNum} {initUnitString} converts to {returnNum} {returnUnitString}' with the result rounded to 5 decimals.

- All 16 unit tests are complete and passing.
  1. Whole number input <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  2. Rread a decimal number input <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  3. Read a fractional input <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  4. Read a fractional input with a decimal <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  5. Return an error on a double-fraction (i.e. 3/2/3) <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  6. Default to a numerical input of 1 when no numerical <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  7. For each valid unit input: getUnit(input) <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  8. For Each Valid Unit Inputs: getReturnUnit(initUnit) <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  9. Unknown Unit Input <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  10. For Each Valid Unit Inputs: spellOutUnit(unit) <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  11. Gal to L <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  12. L to Gal <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  13. LBS to KG <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  14. KG LBS <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  15. Mi to Km <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  16. Km to Mi <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>

- All 5 functional tests are complete and passing.
  1. Convert a valid input such as 10L: GET request to /api/convert. <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  2. Convert an invalid input such as 32g: GET request to /api/convert. <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  3. Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert. <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  4. Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert. <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>
  5. Convert with no number such as kg: GET request to /api/convert. <img src="https://img.icons8.com/emoji/15/000000/check-mark-emoji.png"/>

### [ Demo](https://boilerplate-project-metricimpconverter.sukainaabkari.repl.co/)


## <a href="https://www.freecodecamp.org/suki-220" target="_blank"><img src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/30/000000/external-developer-women-profession-sbts2018-lineal-color-sbts2018.png"/></a> Authors

Sukaina Abkari & FCC
